import './App.css';
import { useState} from 'react';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';

function App() {
  const [mode, setMode] = useState('STOPWATCH');
  const [inputTime, setInputTime] = useState(null);
  let content = null;

  const modeChange =(newMode)=>{
    if (newMode === 'TIMER') {
      const startTime = prompt("타이머 몇초로 할까요?(3600미만 초로 입력):");
      if(startTime===null||parseInt(startTime, 10)>=3600){
        alert("시간입력 제대로 하세요^^");
        setMode('STOPWATCH');
      }
      else{
        setInputTime(parseInt(startTime, 10)*1000);
      }
    }
  }
  content = mode === 'TIMER' ? <Timer inputTime={inputTime} /> : <Stopwatch />;

  return (
    <div className="container">
      <div className="item">
        <a href='/timer' onClick={(event)=>{
          event.preventDefault();
          setMode('TIMER');
          modeChange('TIMER');
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
