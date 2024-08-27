import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md"; 
import '../style/home/Home.scss';
export const Home =()=>{
    return <div className="home-container">
        <div className="title">
            <MdHome className="home-icon"></MdHome>
            <h1>메인페이지</h1>
        </div>
        <div className="links">
            <Link to="/todos" className="link-item"> 일정관리 </Link>
            <hr className="line"/>
            <Link to="/Myapp" className="link-item"> 랜덤 영화 뽑기 </Link>
        </div>
    </div>;
}