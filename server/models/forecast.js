import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const { OPENCAGE_API_KEY, OPEN_WEATHER_API_KEY, ALEX } = process.env;

console.log({ OPENCAGE_API_KEY, OPEN_WEATHER_API_KEY, ALEX });

const getCoordinatesByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPENCAGE_API_KEY}&language=en&pretty=1`,
    );
    const data = await response.json();
    const [firstResult] = data.results;
    const { lng, lat } = firstResult.geometry;
    return { lng, lat };
  } catch (error) {
    throw new Error(error);
  }
};

const getWeatherDataFromApi = async ({ lat, lng }) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,minutely,hourly,alerts&appid=${OPEN_WEATHER_API_KEY}&units=metric`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const getWeatherDataBy = async (city) => {
  try {
    const { lat, lng } = await getCoordinatesByCity(city);
    const weatherData = await getWeatherDataFromApi({ lat, lng });
    return weatherData;
  } catch (error) {
    throw new Error(error);
  }
};
