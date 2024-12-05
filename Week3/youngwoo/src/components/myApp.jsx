import React, { useState, useEffect } from 'react';
import '../styles/myApp.css';
import API from '../api/boxoffice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

function MyApp() {
  const API_KEY = '544a696a2b78534f8babb72d5220f35e'

  const [dailyBoxOfficeData, dailyBoxOfficeSetData] = useState([]);
  const [date, setDate] = useState('');  

  let navigate = useNavigate();

  useEffect(() => {
    const fetchBoxOfficeData = async () => {
      if (date) {
        try {
          const response = await axios.get(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${date}`
          );
          dailyBoxOfficeSetData(response.data.boxOfficeResult.dailyBoxOfficeList);
        } catch (error) {
          console.error('Error fetching box office data', error);
        }
      }
    };

    fetchBoxOfficeData();
  }, [date]);
    
  const handleDate = (e) => {
    setDate(e.target.value.replace(/-/g, ''));
  };

  return (
    <div className="App">
      <button className='goToHome' onClick={ () => {
          navigate('/');
        } } ><IoIosArrowRoundBack /></button>
      <div className='container'>
        <div className='title'>Daily Box Office</div>
        <div className='date'>
          <input className='inputDate' type="date" onChange={handleDate} />
        </div>
      </div>
      <ul className='movies'>
          {dailyBoxOfficeData.map((movie, index) => (
            <li className='detailMovie' key={index}>
              <p>Rank : {movie.rank}</p>
              <p>Movie : {movie.movieNm}</p>
              <p>openDate : {movie.openDt}</p>
              <p>Sales : {Number(movie.salesAmt).toLocaleString()}</p>
              <p>Audience : {Number(movie.audiCnt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default MyApp;
