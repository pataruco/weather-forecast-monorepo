import React, { useState } from 'react';
import { getWeatherData } from '../lib/get-weather.js';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setLocation(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getWeatherData(location);
    console.log(data);
    setWeatherData(data);
  };

  return (
    <>
      <h1>Weather forecast</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input
          type="search"
          id="location"
          placeholder="Search weather"
          name="location"
          onChange={handleChange}
          value={location}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        {weatherData.map((weather) => {
          return (
            <article key={weather.dt}>
              <h2>
                {new Intl.DateTimeFormat('en-GB').format(
                  new Date(weather.dt * 1000),
                )}
              </h2>
              <picture>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </picture>
              <h3>Temperature</h3>
              <dl>
                <dt>Day</dt>
                <dd>{weather.feels_like.day}</dd>
                <dt>Night</dt>
                <dd>{weather.feels_like.night}</dd>
              </dl>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;

/* 
{
  "dt": 1603443600,
  "sunrise": 1603426625,
  "sunset": 1603462215,
  "temp": {
    "day": 13.47,
    "min": 7.7,
    "max": 13.47,
    "night": 11.81,
    "eve": 11.73,
    "morn": 11.05
  },
  "feels_like": {
    "day": 8.72,
    "night": 7.76,
    "eve": 7.71,
    "morn": 6.28
  },
  "pressure": 1006,
  "humidity": 76,
  "dew_point": 9.33,
  "wind_speed": 6.6,
  "wind_deg": 257,
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "clouds": 75,
  "pop": 1,
  "rain": 5.34,
  "uvi": 0.99
}

*/
