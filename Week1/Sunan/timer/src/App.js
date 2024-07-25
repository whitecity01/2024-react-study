import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {FaStopCircle, FaPlusCircle, FaPauseCircle, FaPlayCircle} from 'react-icons/fa'

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

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
    setTime(0);
  };
  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setTime(0);
    setStart(false);
  };

  return (
    <div>
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
  );
}

function Timer() {
  return <h1>타이머입니다.!</h1>;
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
      <div><hr className="line"></hr></div>
      <div className="item">시간기록 부분</div>
    </div>
  );
}

export default App;
