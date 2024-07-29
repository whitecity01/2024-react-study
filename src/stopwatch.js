import React, { useState, useRef } from 'react';
import './timer.css'

function Stopwatch(){
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [records, setRecords] = useState([]);
    const timerRef = useRef(null);

    const playStopwatch = () => {
        if (!running) {
            setRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    };
    const pauseStopwatch = () => {
        if (running) {
            clearInterval(timerRef.current);
            setRunning(false);
        }
    };
    const stopStopwatch = () => {
        clearInterval(timerRef.current);
        setTime(0);
        setRunning(false);
        setRecords([]);
    };

    const plusRecord = () => {
        setRecords([...records, time]);
    };
    
    const settingTime = (time) => {
        const hours = String(Math.floor((time / 3600000) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
        const milliseconds = String(time % 1000).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    };

    return(
        <div className='container'>
           
            <div className='content'>
                <h2 style={{margin: 70}}>스톱워치</h2>
                <span className='time'>{settingTime(time)}</span>
                <div className='button'>
                    <button onClick={playStopwatch}><img className='buttonImage' src='/play.png'></img></button>
                    <button onClick={plusRecord}><img className='buttonImage' src='/plus.png'></img></button>
                    <button onClick={pauseStopwatch}><img className='buttonImage' src='/pause.png'></img></button>
                    <button onClick={stopStopwatch}><img className='buttonImage' src='/stop.png'></img></button>
                </div>
            </div>
            
            <div style={{width: "30px"}}></div>
            <div style={{
                width: "30px",
                textAlign: "center",
                borderLeft: "3px solid #aaa",
                lineHeight: "0.1em",
                height: 500,
                }}
            >
            </div>

            <div className='records'>
                <h2>기록</h2>
                <ul style={{fontSize: "20px"}}>
                    {records.map((record, index) => (
                        <li key={index}>{settingTime(record)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Stopwatch;