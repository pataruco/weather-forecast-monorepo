# Weather forecast monorepo

## What is it

Is full stack exercise for General Assembly SEI (Español 🇪🇸 ) students.

Is an application that provide 7 days weather forecast for a given location

The structure of this repo is following principles of [monorepo](https://en.wikipedia.org/wiki/Monorepo)

It is divided in two main packages

- [Server](./server/readme.md): A simple Express server that receive `GET` request to `/forecast?city=London, UK` would return a JSON payload with a weekly forecast of a given location.
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
