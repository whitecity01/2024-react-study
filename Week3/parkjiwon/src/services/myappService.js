import axios from 'axios';
import { wheatherApiConfig } from '../configs/weatherApiConfig';

// wheather object
// {
//     "coord": {
//         "lon": 128.5463,
//         "lat": 35.8289
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 301.06,
//         "feels_like": 303.03,
//         "temp_min": 300.96,
//         "temp_max": 301.06,
//         "pressure": 1009,
//         "humidity": 65,
//         "sea_level": 1009,
//         "grnd_level": 1004
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.12,
//         "deg": 100
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1723550170,
//     "sys": {
//         "type": 1,
//         "id": 8124,
//         "country": "KR",
//         "sunrise": 1723495378,
//         "sunset": 1723544316
//     },
//     "timezone": 32400,
//     "id": 1835327,
//     "name": "Daegu",
//     "cod": 200
// }

const API_KEY = wheatherApiConfig.API_KEY;
const BASE_URL = wheatherApiConfig.BASE_URL;

export const getCurrentLocation = () => { // 현재 위치 반환 함수
    return new Promise((resolve, reject) => { // promise객체 이용
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              lat: position.coords.latitude, // 위도
              lon: position.coords.longitude // 경도
            };
            resolve(coords); // 비동기 작업 성공처리, coords객체 반환
          },
          (error) => { 
            reject(error); // 비동기 작업 실패처리
          }
        );
    });
}

export const getWeatherByCoords = async (lat, lon) => {
    try {
        const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      
        return response.data;
    } catch (error) {
        console.error("Error: get", error);
        throw error;
    }
};
