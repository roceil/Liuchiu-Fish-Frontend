## ADDED Requirements

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

### Requirement: UI library components register without name collisions

Each shadcn UI component SHALL be auto-registered exactly once. The default Nuxt component scan SHALL exclude the `components/ui` directory's `.vue` files, because those components are already registered through each `components/ui/<name>/index.ts`. UI components SHALL remain usable in templates by their registered names.

#### Scenario: No duplicate component name warning at startup

- **WHEN** the Nuxt dev server starts
- **THEN** no "Two component files resolving to the same name" warning is emitted for any UI component (e.g. Button, Card, Tabs)
- **AND** the UI components remain resolvable in templates by their registered names

### Requirement: Every UI component subdirectory exposes an index module

Each subdirectory under `components/ui` SHALL provide an `index` module so the shadcn-nuxt integration can resolve it while scanning the component directory.

#### Scenario: No missing-index module error at startup

- **WHEN** shadcn-nuxt resolves the index module of each `components/ui` subdirectory during setup
- **THEN** no "ENOENT ... /index" module error is emitted for any subdirectory, including `card-3d`
