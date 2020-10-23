import React from 'react';

const WeatherItem = ({ weather }) => {
  console.log({ weather });
  const {
    dt: unixTime,
    weather: [weatherConditions],
    feels_like: { day, night },
  } = weather;

  const { icon, description } = weatherConditions;

  const dateFormatoptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const dateFormated = new Intl.DateTimeFormat(
    'en-GB',
    dateFormatoptions,
  ).format(new Date(unixTime * 1000));

  return (
    <article>
      <h2>{dateFormated}</h2>
      <picture>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </picture>
      <p>{description}</p>
      <h3>Temperature</h3>
      <dl>
        <div>
          <dt>Day:</dt>
          <dd>{day}&#8451;</dd>
        </div>
        <div>
          <dt>Night:</dt>
          <dd>{night}&#8451;</dd>
        </div>
      </dl>
    </article>
  );
};

export default WeatherItem;
