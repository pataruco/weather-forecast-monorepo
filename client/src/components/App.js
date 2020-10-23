import React, { useState } from 'react';
import { getWeatherData } from '../lib/get-weather.js';
import SearchForm from './search-form';
import WeatherItem from './weather-item';

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
    setWeatherData(data);
  };

  return (
    <>
      <h1>Weather forecast</h1>
      <SearchForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        location={location}
      />
      <section>
        {weatherData.map((weather) => (
          <WeatherItem key={weather.dt} weather={weather} />
        ))}
      </section>
    </>
  );
}

export default App;
