# frontend-build-config Specification

## Purpose

TBD - created by archiving change 'fix-dev-startup-warnings'. Update Purpose after archive.

## Requirements

### Requirement: Client bundle excludes non-public environment variables

The frontend build SHALL inject only an explicit allowlist of public environment variables into the client bundle. The build SHALL NOT inject the entire `process.env` object. The injected `process.env` SHALL remain a defined object so that reading an unlisted key yields `undefined` rather than a runtime `ReferenceError`.

#### Scenario: Secrets are absent from the client bundle

- **WHEN** the dev or production build bundles client code
- **THEN** the bundle contains only the allowlisted public variables (`NODE_ENV`, `NITRO_PUBLIC_NODE_ENV`, `NITRO_PUBLIC_SITE_URL`, `NITRO_PUBLIC_SUPABASE_URL`, `NITRO_PUBLIC_SUPABASE_ANON_KEY`, `NITRO_GOOGLE_ANALYTICS_ID`)
- **AND** secret values such as `NITRO_SUPABASE_PASSWORD` and `PASSWORD` are absent from the bundle
- **AND** Vite emits no "process.env contains PATH" security warning

#### Scenario: Reading an unlisted variable does not throw

- **WHEN** client code reads a `process.env` key that is not in the allowlist
- **THEN** the expression evaluates to `undefined`
- **AND** no `ReferenceError` is raised at runtime

---
### Requirement: UI library components register without name collisions

Each shadcn UI component SHALL be auto-registered exactly once. The default Nuxt component scan SHALL exclude the `components/ui` directory's `.vue` files, because those components are already registered through each `components/ui/<name>/index.ts`. UI components SHALL remain usable in templates by their registered names.

#### Scenario: No duplicate component name warning at startup

- **WHEN** the Nuxt dev server starts
- **THEN** no "Two component files resolving to the same name" warning is emitted for any UI component (e.g. Button, Card, Tabs)
- **AND** the UI components remain resolvable in templates by their registered names

---
### Requirement: Every UI component subdirectory exposes an index module

Each subdirectory under `components/ui` SHALL provide an `index` module so the shadcn-nuxt integration can resolve it while scanning the component directory.

#### Scenario: No missing-index module error at startup

- **WHEN** shadcn-nuxt resolves the index module of each `components/ui` subdirectory during setup
- **THEN** no "ENOENT ... /index" module error is emitted for any subdirectory, including `card-3d`

---
### Requirement: Build resolves a single Vue runtime version

The dependency graph SHALL resolve to exactly one version of the Vue runtime across the entire project, including transitive dependencies. The package manager configuration SHALL pin the Vue family packages (`vue`, `@vue/runtime-core`, `@vue/runtime-dom`, `@vue/server-renderer`, `@vue/compiler-core`, `@vue/compiler-dom`, `@vue/compiler-sfc`, `@vue/shared`, `@vue/reactivity`) to a single version so that the Nuxt toolchain and the UI component libraries (reka-ui, radix-vue, pinia, @vueuse, embla-carousel-vue, @unhead/vue) share one runtime. The installed dependency tree and the production build output SHALL NOT contain two different versions of `@vue/runtime-core` or `@vue/runtime-dom`.

#### Scenario: Only one Vue runtime version is installed

- **WHEN** dependencies are installed and the project is built for production
- **THEN** `@vue/runtime-core` resolves to exactly one version in the dependency tree
- **AND** `@vue/runtime-dom` resolves to exactly one version
- **AND** the production server output under `.output/server` bundles only that single Vue version

#### Scenario: SSR pages that render Teleport components return 200

- **WHEN** the production server (`node .output/server/index.mjs`) handles `GET /news` and `GET /about-us`
- **THEN** both routes respond with HTTP 200
- **AND** no `Cannot read properties of null (reading 'ce')` error is raised during SSR
- **AND** the home page and other existing routes continue to render without new server errors

<!-- @trace
source: fix-news-aboutus-prod-500
updated: 2026-06-19
code:
  - package.json
-->

---
### Requirement: Icons are bundled client-side, not required from the server at runtime

The icon module SHALL be configured so that icons used in the application are inlined into the client/app bundle at build time, and the server build SHALL NOT depend on `@iconify-json/<collection>` modules at runtime. The server icon bundle SHALL be disabled (`serverBundle: false`) and the client bundle SHALL scan source files for statically referenced icon names (`clientBundle.scan: true`) so that only the icons actually used are bundled. The production server output SHALL NOT embed full `@iconify-json` collections.

#### Scenario: Icon endpoint does not fail with a missing module

- **WHEN** the production server (`node .output/server/index.mjs`) receives a request under `/api/_nuxt_icon/`
- **THEN** the request SHALL NOT raise `Cannot find module '@iconify-json/<collection>/icons.json'`
- **AND** no `MODULE_NOT_FOUND` error referencing an `@iconify-json` package is logged

#### Scenario: Used icons render without runtime icon-collection modules

- **WHEN** a page that uses `<Icon>` (for example the icon `material-symbols-light:close` or `heroicons:information-circle-20-solid`) is server-rendered in a production build
- **THEN** the icon SHALL render from the client bundle without requiring an `@iconify-json/<collection>` module to be present at runtime

#### Scenario: Production server output excludes full icon collections

- **WHEN** the project is built for production
- **THEN** the `.output/server` output SHALL NOT contain bundled full `@iconify-json` collection chunks (the multi-megabyte per-collection icon data)

<!-- @trace
source: fix-icon-server-bundle-500
updated: 2026-06-19
code:
  - nuxt.config.ts
-->