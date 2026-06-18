## ADDED Requirements

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
