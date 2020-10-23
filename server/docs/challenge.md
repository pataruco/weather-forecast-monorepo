![](https://pataruco.github.io/ga-assets/assets/logos/ga.svg)

# City Sun

You have been tasked to build a web service which will provide a 7 day weather forecast for a provided city.

The service will have a single endpoint: `/forecast` which should return the data in JSON format.

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

You can use any public APIs to complete the task, but we would recommend:

- [OpenCage Geocoding API](https://opencagedata.com/api) to get lat/lng coordinates for cities
- [Open Weather One Call API](https://openweathermap.org/api/one-call-api) for weather info

## Tips

- Accustomise yourself to the relevant APIs and their documentation using Postman first. Make sure you can get all the data from your APIs before attempting to build a solution
- Use the [node-fetch](https://github.com/node-fetch/node-fetch) to make HTTP requests from your Node.JS application
- You should store all the API keys and secrets in an `.env` file, and active them using the [dotenv module](https://www.npmjs.com/package/dotenv)

_Have fun, and happy coding!_
