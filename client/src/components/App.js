import React, { useState } from 'react';
import { getWeatherData } from '../lib/get-weather.js';
import Footer from './footer.js';
import Header from './header.js';
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
    <div className="app">
      <Header />
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          location={location}
        />
        <section className="weather">
          {weatherData.map((weather) => (
            <WeatherItem key={weather.dt} weather={weather} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
