import React from 'react';

const WeatherItem = ({ weather }) => {
  return (
    <article key={weather.dt}>
      <h2>
        {new Intl.DateTimeFormat('en-GB').format(new Date(weather.dt * 1000))}
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
};

export default WeatherItem;
