[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# Weather forecast monorepo

## What is it

Is full stack exercise for General Assembly SEI (Español 🇪🇸 ) students.

Is an application that provide 7 days weather forecast for a given location

The structure of this repo is following principles of [monorepo](https://en.wikipedia.org/wiki/Monorepo)

It is divided in two main packages

- [Server](./server/readme.md): A simple Express server that receive `GET` request to `/forecast?city=Madrid` would return a JSON payload with a weekly forecast of a given location.
- [Client](./client/readme.md) A simple React application that render 7 days weather forecast for a given location

## How to install

1. Clone this repo

```sh
git clone git@github.com:pataruco/weather-forecast-monorepo.git
```

2. Navigate to the folder `weather-forecast-monorepo`

```sh
cd weather-forecast-monorepo
```

3. Install dependencies

```sh
yarn
```

## How to run

### Locally

Please run the following commands in different console tabs

- To run the API server, type:

```sh
yarn workspace server start
```

- To run the React server, type:

```sh
yarn workspace client start
```

## How to deploy

### Server

1. Login into heroku

   ```sh
   heroku login
   ```

2. If you are not tet created an herku folder for this app, run the following, otherwise step this

   ```sh
   heroku create --region=eu
   ```

3. Deploy

   ```sh
   git push heroku master
   ```

4. Once is deployed and functional take the URL of the app and added as a value of the `REACT_APP_SERVER_URL` on `.env.production`

```sh
# ./client/.env.production
REACT_APP_SERVER_URL='https://hipster-name.herokuapp/forecast'
```

### Client

1. Create a react production build

   ```sh
   yarn workspace client build
   ```

2. Deploy to Netlify

   ```sh
   netlify deploy
   ```
