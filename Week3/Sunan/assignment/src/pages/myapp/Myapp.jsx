import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import '../../style/myapp/Myapp.scss';
import MovieRecommend from "../../components/myapp/MovieRecommend";
export const Myapp =()=>{
    const navigate = useNavigate();
    const goBack =()=>{
        navigate(-1);
    };
    return <div>
        <div className="title"> 
            <IoIosArrowRoundBack className='back-icon' onClick={goBack} />
            <h2>랜덤 영화 뽑기🎬</h2>
        </div>
        <div className="content">
            <MovieRecommend/>
        </div>
    </div>;
}