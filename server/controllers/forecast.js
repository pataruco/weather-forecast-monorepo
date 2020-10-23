import { getWeatherDataBy } from '../models/forecast.js';

export const getForecastByLocationName = async (request, response) => {
  const {
    query: { city },
  } = request;

  try {
    const weatherData = await getWeatherDataBy(city);
    return response.status(200).send(weatherData);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
