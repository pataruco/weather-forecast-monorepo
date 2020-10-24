const { REACT_APP_SERVER_URL } = process.env;

export const getWeatherData = async (location) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}?city=${location}`);
  const data = await response.json();
  const { daily: weatherData } = data;
  return weatherData;
};
