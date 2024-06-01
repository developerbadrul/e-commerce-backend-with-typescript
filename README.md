# Ecommerce Backend With typeScript

## Project Description

This project is an Express.js application that uses TypeScript, Mongoose, and other modern web development tools and practices. It is designed to provide a robust backend service with type safety, linting, and other development conveniences.

## Features

- Express.js for handling server requests
- TypeScript for type safety and modern JavaScript features
- Mongoose for MongoDB object modeling
- ESLint for linting and code quality
- Scripts for development, building, and linting

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>= 12.x)
- npm (>= 6.x)

## API Documentation

This repository contains the documentation for the API endpoints of Ecommerce Backend With typeScript. It provides detailed information about the available endpoints, request methods, request/response formats, and sample responses.

## Live Link: https://assignment-2-p-hero.vercel.app

## Documentation

The API documentation is available in HTML format. You can access it by opening the following link in your browser:

[API Documentation](https://assignment-2-p-hero.vercel.app/)

## Endpoints

The API consists of the following endpoints:

- **Products Management**
  - [Create a New Product](https://assignment-2-p-hero.vercel.app/api/products) (POST)
  - [Retrieve a List of All Products](https://assignment-2-p-hero.vercel.app/api/products) (GET)
  - [Retrieve a Specific Product by ID](https://assignment-2-p-hero.vercel.app/api/products/:productId) (GET)
  - [Update Product Information](https://assignment-2-p-hero.vercel.app/api/products/:productId) (PUT)
  - [Delete a Product](https://assignment-2-p-hero.vercel.app/api/products/:productId) (DELETE)
  - [Search a Product](https://assignment-2-p-hero.vercel.app/api/products?searchTerm=iphone) (GET)
- **Order Management**
  - [Create a New Order](https://assignment-2-p-hero.vercel.app/api/orders) (POST)
  - [Retrieve All Orders](https://assignment-2-p-hero.vercel.app/api/orders) (GET)
  - [Retrieve Orders by User Email](https://assignment-2-p-hero.vercel.app/api/orders?email=level2@programming-hero.com) (GET)

## Usage

To use the API, you can send requests to the respective endpoints using tools like cURL, Postman, or your preferred HTTP client.

### Example:

```bash
curl -X GET https://assignment-2-p-hero.vercel.app/api/products


### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd assignment-2-phero

Install the dependencies:

bash

npm install

Create a .env file in the root directory and add the following environment variables:

plaintext

    PORT=3000
    DATABASE_URL=mongodb://localhost:27017/your-database-name

Running the Project
Development

To run the project in development mode with live reloading:

bash

npm run dev

Production

To build and run the project for production:

    Build the project:

    bash

npm run build

Start the project:

bash

    npm start

Linting

To lint the project:

bash

npm run lint

To automatically fix linting issues:

bash

npm run lint:fix

Project Structure

src/
├── controllers/      # Controllers for handling requests
├── models/           # Mongoose models
├── routes/           # Express routes
├── services/         # Service layer for business logic
├── server.ts         # Entry point for the application
dist/                 # Compiled output (after running `npm run build`)
.env                  # Environment variables
package.json          # Project configuration and dependencies
tsconfig.json         # TypeScript configuration
.eslintrc.js          # ESLint configuration


Scripts

    npm start: Runs the compiled project from the dist directory.
    npm run dev: Runs the project in development mode using ts-node-dev.
    npm run build: Compiles the TypeScript code into JavaScript in the dist directory.
    npm run lint: Lints the project using ESLint.
    npm run lint:fix: Lints the project and fixes issues automatically.

Dependencies

    express: Fast, unopinionated, minimalist web framework for Node.js.
    mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
    cors: Middleware for enabling Cross-Origin Resource Sharing.
    dotenv: Loads environment variables from a .env file into process.env.

Dev Dependencies

    @types/cors: Type definitions for cors.
    @types/express: Type definitions for express.
    @typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
    @typescript-eslint/parser: TypeScript parser for ESLint.
    eslint: Pluggable JavaScript linter.
    ts-node-dev: TypeScript execution environment and REPL for node.js, with source map and native ESM support.

License

This project is licensed under the ISC License. See the LICENSE file for details.
Author

Md Badrul Alam




This `README.md` file provides a comprehensive overview of the project, including installa