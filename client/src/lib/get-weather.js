export const getWeatherData = async (location) => {
  const response = await fetch(`/forecast?city=${location}`);
  const data = await response.json();
  const { daily: weatherData } = data;
  return weatherData;
};
