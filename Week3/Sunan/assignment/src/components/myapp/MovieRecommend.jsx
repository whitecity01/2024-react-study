import React, { useState } from 'react';
import { getRandomMovie } from '../../services/myapp/getRandomMovie'; // 서비스 파일에서 가져옵니다
import '../../style/myapp/MovieRecommend.scss';

const MovieRecommend = () => {
  const [data, setData] = useState(null);

  const handleGetRandomMovie = async () => {
    const movie = await getRandomMovie();
    setData(movie);
  };    

  return (
    <div className='movieInfo-container'>
        <h2>랜덤 영화 뽑기</h2>
      <button className='random-button' onClick={handleGetRandomMovie}>🔀</button>
      {data ? (
        <div>
          <h3>영화 제목: {data.Title}</h3>
          <p>연도: {data.Year}</p>
          <img src={data.Poster} alt="로딩중... 다시시도 바랍니다." />
        </div>
      ):<p>눌러주세요</p>}
    </div>
  );
};

export default MovieRecommend;
