# Weather by location API challenge

## What is it

Is the resolution of the challenge described [here](./docs/challenge.md), which is an API that receive a location by search query and return the weather forecast for the next 7 days

So, for example, a `GET` request to `/forecast?city=London, UK` would return a JSON payload with a weekly forecast for London. For example:

```json
{
  "lat": 40.42,
  "lon": -3.7,
  "timezone": "Europe/Madrid",
  "timezone_offset": 7200,
  "daily": [
    {
      "dt": 1603364400,
      "sunrise": 1603348406,
      "sunset": 1603387481,
      "temp": {
        "day": 15.79,
        "min": 13.35,
        "max": 16.7,
        "night": 14.82,
        "eve": 15.84,
        "morn": 13.35
      },
      "feels_like": {
        "day": 12.92,
        "night": 10.24,
        "eve": 12.68,
        "morn": 11.89
      },
      "pressure": 1014,
      "humidity": 77,
      "dew_point": 11.77,
      "wind_speed": 4.88,
      "wind_deg": 196,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 75,
      "pop": 0.99,
      "rain": 13.65,
      "uvi": 3.21
    }
  ]
}
```

## How to install it?

1. Copy this project and paste it on `~/development`

```sh
cp -R ~/development/01-classwork/week-08/thursday/morning/cuestion-de-tiempo ~/development
```

2. Navigate to the project

```sh
cd ~/development/cuestion-de-tiempo
```

3. Install dependencies

```sh
yarn
```

4. Create an `.env` file with the contents of `.env.example`

```sh
cat .env.example >> .env
```

5. Open an account in the following services and retrieve API KEYS

- [OpenCage](https://opencagedata.com/api#quickstart)
- [OpenWeather](https://openweathermap.org/)

6. Paste keys in `.env`, e.g.:

```sh
OPENCAGE_API_KEY='APIKEYNUMBER'
OPEN_WEATHER_API_KEY='APIKEYNUMBER'
```

## How to run it

1. On your terminal run

```sh
yarn start
```

2. Open Postman and create a `GET` request to your API

```txt
http://localhost:5000/forecast?city=Madrid
```

3. Win 🚀

## Extras

We wrote some pseudo code [here](./docs/pseudo-code.md)
