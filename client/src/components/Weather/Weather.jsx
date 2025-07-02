import React, { useEffect, useState } from 'react';
import styles from './Weather.module.css';
import WeatherCard from '../common/WeatherCard/WeatherCard';
import { fetchWeatherForCities } from '../../services/weatherService';
import { useLoader } from '../common/Loader/LoaderContext';
import { toast } from 'react-toastify';

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Indore', 'Ahmedabad', 'Bhopal'];

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState([]);
  const { setLoading } = useLoader();

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
      const results = await fetchWeatherForCities(cities);
      setWeatherData(results);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, []);

  if (weatherData.length === 0) return <p>Loading weather...</p>;

  return (
    <div className={styles.weatherContainer}>
      <h2 className="sectionHeading" style={{textAlign: 'left'}}>Weather Info</h2>
      <div className="sectionDescription">
        Displays current weather data for a fixed city (e.g., Mumbai or Delhi).
      </div>
      <div className={styles.weatherCardsGrid}>
        {weatherData.map((weather) => (
          <WeatherCard
            key={weather.city}
            city={weather.city}
            temp={weather.main.temp}
            tempUnit="°C"
            feelsLike={weather.main.feels_like}
            humidity={weather.main.humidity}
            wind={weather.wind.speed}
            description={weather.weather[0].description}
            main={weather.weather[0].main}
          />
        ))}
      </div>
    </div>
  );
}