[![Netlify Status](https://api.netlify.com/api/v1/badges/f128c8fd-5c5c-404e-9c33-3bf51e7003fa/deploy-status)](https://app.netlify.com/sites/weather-forecast-sei/deploys)

# Weather by location client

## What is it

Is a React app created with [`create-react-app`](https://create-react-app.dev/) library that render weather forecast for the next 7 days given the input of a user

## How to install it?

1. Navigate to the package

   ```sh
   cd weather-forecast-monorepo/client
   ```

2. Install dependencies

   ```sh
   yarn
   ```

## How to run it

1.  Create two environmental files from `.env.example`, one for production and the other for development

    ```sh
    cat .env.example >> .env.development
    cat .env.example >> .env.production
    ```

2.  Change the values on the `.env files`

3.  On your terminal run

    ```sh
    yarn workspace client start
    ```

## How to make a production build

1. On your terminal run

   ```sh
   yarn workspace client build
   ```
