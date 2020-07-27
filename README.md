<h1>Ecommerce Backend</h1>

## Running Repo Locally
1. Clone the repo
2. Run `npm install`
3. Run `npm start` and visit `http://localhost:8080/api/v1/docs/` in your browser.
4. Sample API request body (for POST requests) is provided as part of swagger documentation

## Stack and Libraries Used
1. NodeJS on the backend
2. Express framework for HTTP
3. MongoDB as data store
4. Mongoose ORM
5. Swagger for API documentation

## Schema Validations
Assumed below validations on schema
1. In `Account` model - email must be unique
2. In `Inventory` model - product name must be unique

## Code Structuring / Navigation
1. `routes/api/v1` - APIs
2. `src/models` - Mongoose Models
3. `src/validators` - Validator functions on business objects
4. `src/services` - Service Layer / Business Logic

## List of APIs and functionalities
1. Create account / user
2. Get all accounts / users
3. Add a new product into the inventory (name and quantity)
4. Update the quantity of a product in the inventory
5. View all the products in the inventory
6. Create order
7. View all orders
8. Reduce the inventory once order is placed successfully
9. Validate account information, product availability and presence before creating an order

## Extensible / Good to have features (Incomplete List)
1. Race conditions on inventory updates and inventory checks before order placing can be done by using a read through write through cache mechanism (using Redis) and use Redis locks for the duration of read and update operation or by using a hash table.
2. Price tagging on product and price calculations when order placed
3. Bypass invalid products and place the order with all other valid products in order create API
