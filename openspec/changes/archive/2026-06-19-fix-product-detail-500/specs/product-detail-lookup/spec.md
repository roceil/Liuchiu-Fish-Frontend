## ADDED Requirements

### Requirement: Product detail page resolves a valid numeric product id

The product detail route SHALL look up a product by the route `id` parameter. When the `id` is a positive integer that matches an existing product in the database, the page SHALL render that product's details and respond with HTTP 200.

#### Scenario: Existing product is displayed

- **WHEN** a request targets the product detail route with an `id` that is a positive integer matching an existing product
- **THEN** the page renders that product's name, price, and details
- **AND** the response status is 200

### Requirement: Invalid or unknown product id yields 404 not 500

The product lookup SHALL treat any route `id` that is not a positive integer — including non-numeric strings, `undefined`, and `NaN` — as "not found", and SHALL NOT pass such a value into the bigint-keyed database query. When the `id` is invalid, or is a valid number that matches no product, the route SHALL respond with HTTP 404. The route SHALL NOT produce an HTTP 500 or surface a database "invalid input syntax for type bigint" error for these cases.

#### Scenario: Non-numeric id returns 404 without a database error

- **WHEN** a request targets the product detail route with a non-numeric `id` such as `SSG004`
- **THEN** the route responds with HTTP 404
- **AND** no "invalid input syntax for type bigint" error is raised or logged

#### Scenario: Missing or undefined id returns 404

- **WHEN** the route `id` parameter is `undefined` or empty
- **THEN** the route responds with HTTP 404
- **AND** no database query is executed with the invalid value

#### Scenario: Numeric but non-existent id returns 404

- **WHEN** a request targets the product detail route with a positive-integer `id` that matches no product
- **THEN** the route responds with HTTP 404

### Requirement: Internal links to product detail use valid product ids

Components that link to the product detail route SHALL use the product's Supabase numeric `id`. The related-products section on the product detail page SHALL source its items from the database product list so that every generated link targets an `id` that resolves to an existing product. No internal link SHALL target a product `id` that does not exist in the database.

#### Scenario: Related-products links are all resolvable

- **WHEN** the product detail page renders its related-products section
- **THEN** every related-product link targets a numeric product `id` that exists in the database
- **AND** following any such link returns HTTP 200 with that product displayed
