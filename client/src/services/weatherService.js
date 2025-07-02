import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeatherForCities = async (cities) => {
  return Promise.all(
    cities.map(async (city) => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return { city, ...res.data };
    })
  );
}; 