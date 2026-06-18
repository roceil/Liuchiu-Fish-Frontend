## ADDED Requirements

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
