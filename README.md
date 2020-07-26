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

## TODO
