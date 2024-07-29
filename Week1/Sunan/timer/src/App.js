import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {FaStopCircle, FaPlusCircle, FaPauseCircle, FaPlayCircle} from 'react-icons/fa'

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let interval;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!start && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start, time]);

  const handleStart = () => {
    setStart(true);
  };
  
  const handleRecord = () => {
    const newRecord = `0${Math.floor((time / 60000) % 60)}`.slice(-2) + " : " +
                      `0${Math.floor((time / 1000) % 60)}`.slice(-2) + " : " +
                      `0${Math.floor((time / 10) % 100)}`.slice(-2);
    setRecords([...records, newRecord]); // 현재 시간을 기록에 추가
  };
  const handleStop = () => {
    setStart(false);
  };
  
  const handleReset = () => {
    setTime(0);
    setStart(false);
    setRecords([]);
  };
  return (
    <div className='container'>
      <div className='item'>
        <div><h1>스톱워치</h1></div>
      <time>
        {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} :
        {`0${Math.floor((time / 1000) % 60)}`.slice(-2)} :
        {`0${Math.floor((time / 10) % 100)}`.slice(-2)}
      </time>
      <div className="button-container">
        <button onClick={handleStart}><FaPlayCircle className='icon'/></button>
        <button onClick={handleRecord}><FaPlusCircle className='icon'/></button>
        <button onClick={handleStop}><FaPauseCircle className='icon'/></button>
        <button onClick={handleReset}><FaStopCircle className='icon'/></button>
      </div>
    </div>
    <div><hr className="line"></hr></div>
    <div className='records'>
        <h2>기록</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

function Timer() {
  return <h1>타이머입니다.!</h1>;
}

function Recorder(){

}

function App() {
  const [mode, setMode] = useState('TIMER');
  let content = null;

  if (mode === 'TIMER') {
    content = <Timer />;
  } else {
    content = <Stopwatch />;
  }

  return (
    <div className="container">
      <div className="item">
        <a href='/timer' onClick={(event)=>{
          event.preventDefault();
          setMode('TIMER');
        }} className={`mode ${mode === 'TIMER' ? 'active' : ''}`}><p>타이머</p></a>
        <hr width='100%' color='black'></hr>
        <a href='/stopwatch' onClick={(event)=>{
          event.preventDefault();
          setMode('STOPWATCH');
        }} className={`mode ${mode === 'STOPWATCH' ? 'active' : ''}`}><p>스톱워치</p></a>
      </div>
      <div><hr className="line"></hr></div>
      <div className="item">{content}</div>
    </div>
  );
}

export default App;