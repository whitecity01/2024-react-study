import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className='title'>메인 페이지</div>
      <div className='line'></div>
      <Link to="/todos" className = 'link'>
        <div>todo</div>
      </Link>
      
      <Link to="/myapp" className = 'link'>
        <div>dailyBoxOffice</div>
      </Link>
    </div>
  );
};

export default Home;