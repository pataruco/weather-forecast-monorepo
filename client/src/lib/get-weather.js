const { NODE_ENV } = process.env;
const serverUrl =
  NODE_ENV === 'development'
    ? '/forecast'
    : 'https://young-gorge-76750.herokuapp.com/forecast';

export const getWeatherData = async (location) => {
  const response = await fetch(`${serverUrl}?city=${location}`);
  const data = await response.json();
  const { daily: weatherData } = data;
  return weatherData;
};
