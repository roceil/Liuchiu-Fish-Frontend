## ADDED Requirements

### Requirement: Product catalog data is sourced only from the database

The application SHALL source all product catalog data from the database (Supabase) through the product service layer. The codebase SHALL NOT define or export a hardcoded static product-list constant. Removing such a constant SHALL NOT leave unused imports or type references behind.

#### Scenario: No hardcoded product list remains in the codebase

- **WHEN** the codebase is searched for a hardcoded product-list constant named `productsList`
- **THEN** no definition or export of `productsList` is found
- **AND** the project lint (including the unused-imports rule) reports no errors introduced by its removal
- **AND** the production build completes successfully

#### Scenario: Product surfaces still render from database data

- **WHEN** a user visits the product listing page, a product detail page, or the related-products section
- **THEN** the displayed products are obtained from the database service layer
- **AND** every product link targets a numeric database id
