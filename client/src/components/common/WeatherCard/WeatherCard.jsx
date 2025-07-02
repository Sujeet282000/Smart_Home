import React from 'react';
import styles from './WeatherCard.module.css';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';

const getWeatherIcon = (main) => {
  switch (main) {
    case 'Clear':
      return <WiDaySunny size={40} color="#1976d2" />;
    case 'Clouds':
      return <WiCloudy size={40} color="#1976d2" />;
    case 'Rain':
      return <WiRain size={40} color="#1976d2" />;
    case 'Thunderstorm':
      return <WiThunderstorm size={40} color="#1976d2" />;
    case 'Snow':
      return <WiSnow size={40} color="#1976d2" />;
    case 'Fog':
    case 'Mist':
    case 'Haze':
      return <WiFog size={40} color="#1976d2" />;
    default:
      return <WiDaySunny size={40} color="#1976d2" />;
  }
};

const WeatherCard = ({ city, temp, tempUnit, description, main, feelsLike, humidity, wind }) => {

  
  const windKmh = wind !== undefined ? Math.round(wind * 3.6) : undefined;
  return (
    <div className={styles.weatherCardCard}>
      <h3>{city}</h3>
      <div className={styles.weatherCardRow}>
        {getWeatherIcon(main)}
        <p>
          <strong>{temp}{tempUnit}</strong>, {description}
        </p>
      </div>
      <div className={styles.weatherCardDetails}>
        {feelsLike !== undefined && (
          <div>Feels like: <strong>{feelsLike}{tempUnit}</strong></div>
        )}
        {humidity !== undefined && (
          <div>Humidity: <strong>{humidity}%</strong></div>
        )}
        {windKmh !== undefined && (
          <div>Wind: <strong>{windKmh} km/h</strong></div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard; 