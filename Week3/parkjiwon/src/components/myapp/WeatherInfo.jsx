import React from "react";
import '../../styles/myapp/WeatherInfo.scss';
import { wheatherApiConfig } from "../../configs/weatherApiConfig";

// 날씨 이미지 종류
// https://openweathermap.org/weather-conditions
const IMAGE_BASE_URL = wheatherApiConfig.IMAGE_BASE_URL;

const WeatherInfo = ({weather}) => {
    // 날씨 정보 추출
    const { name } = weather;
    const { humidity, temp, temp_max, temp_min } = weather.main;
    const { icon } = weather.weather[0];
    // console.log(weather);

  return (
    <div className="weatherinfo-container">
        <div className="location-box">🏙️{name}🌆</div>
        <img 
            src={`${IMAGE_BASE_URL}/${icon}@2x.png`} 
            alt="Weather Icon" 
            className="weather-icon" 
        />
        <div className="current-temp">
            현재 온도🌡️: {(temp - 273.15).toFixed(2)}℃ / {((temp - 273.15) * 1.8 + 32).toFixed(2)}℉
        </div>
        <div className="temp-range">
            최고 온도🥵: {(temp_max - 273.15).toFixed(2)}℃
        </div>
        <div className="temp-range">
            최저 온도🥶: {(temp_min - 273.15).toFixed(2)}℃
        </div>
        <div className="humidity">
            습도💧: {humidity}%
        </div>
    </div>
  );
};

export default WeatherInfo;

