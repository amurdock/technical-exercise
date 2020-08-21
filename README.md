# Dunelm Pairing Exercise

This repo contains the source for the Dunelm pairing exercise. Here's some useful information to get you started.

## Description

1. This is a monorepo containing the following services
- api - a node service written using [expressjs](https://expressjs.com/) and responsible for retrieving and returning product data
- aggregator - a [GraphQL](https://graphql.org/) node service written using [expressjs](https://expressjs.com/) and [apollo](https://www.apollographql.com/docs/) responsible for aggregating services (the api service)
- app - a web application written using [react](https://reactjs.org/docs/getting-started.html)
    
2. You can find these services within the `packages` folder.
3. The architecture of these services is as follows.

```
+---------------+        +---------------+        +---------------+
|               |        |               |        |               |
|               |        |               |        |               |
|               |  http  |               |  http  |               |
|      app      +------->+  aggregator   +------->+      api      |
|    (react)    |        |   (GraphQL)   |        |   (express)   |
|               |        |               |        |               |
|               |        |               |        |               |
+---------------+        +---------------+        +---------------+
```

4. If you don't have any experience with GraphQL please feel free to bypass the `aggregator` and call the `api` directly. You can find instructions on how to achieve this in `packages/app/src/App.jsx` and `jest.config.js`.

## Setup

* ensure you have [nodejs 12](https://nodejs.org/en/) installed
* install all dependencies using either `yarn` or `npm`
* run `yarn start` or `npm start`
* in a separate terminal run the tests with `yarn test`

Running the application will start all the services and open your browser at http://localhost:3000. All services are watched using `webpack` or `nodemon` respectively so whilst developing there should be no need to restart. The same goes for your tests.

## Exercise

* Please approach the exercise in the same way you would when writing software commercially.
* Write tests if you feel they're required.
* Use all your tools (git etc.) appropriately.
* Feel free to google if you need additional information.
* Install [npm](https://www.npmjs.com/) dependencies if needed.
* If you're unsure about anything during the exercise then please ask for clarification.

```
As a Dunelm customer
I want to view all products
So that I can choose which ones to buy
```

### #1

```
Given I have accessed the Dunelm website
When I visit the home page
Then I must be presented with a list of all products
```

Notes:
 1. A list of products can be found in `packages/api/products.json`. This should be treated as the data source for the api.
 2. Display the following properties for all products
    - name
    - description
    - category
    - color
    - price
    - inStock
    
### #2

```
Given I have accessed the Dunelm website
When I visit the home page
And I choose to view buyable products only
Then I must be presented with a list of products available to purchase
```

Notes: buyable products are those which have their `inStock` property set to `true`.

### #3

What are the top three things you could do to improve your solution?
