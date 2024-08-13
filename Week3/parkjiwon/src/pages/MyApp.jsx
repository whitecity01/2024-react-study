import { useEffect, useState } from 'react';
import '../styles/MyApp.scss';
import { Link } from "react-router-dom";
import WeatherInfo from '../components/myapp/WeatherInfo';
import { getCurrentLocation, getWeatherByCoords } from '../services/myappService';

const MyApp = () =>{
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const { lat, lon } = await getCurrentLocation();
      const weatherData = await getWeatherByCoords(lat, lon);

      setWeather(weatherData);
    };

    fetchWeather();
  }, []);

  return (
    <div className='myapp-container'>
      {/* weather이 null값이 받아오면 기다리기 */}
      {!weather ? (
        <div>로딩중...</div> 
      ) : (
        <>
          <WeatherInfo weather={weather} />
          <Link to="/">
            <button className="back-button">뒤로가기</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default MyApp;
