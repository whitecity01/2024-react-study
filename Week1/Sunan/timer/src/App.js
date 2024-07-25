import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Timer() {
  return <h1>타이머입니다.!</h1>;
}

function App() {
  const [mode, setMode] = useState('TIMER');
  let content = null;

  if (mode === 'TIMER') {
    content = <Timer />;
  } else {
    content = <Timer />;
  }
//className ="" 적는것은 요소에 CSS 클래스를 적용하는데에 사용된다고
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
      <div className="item">{content}</div>
      <div className="item">{content}</div>
    </div>
  );
}

export default App;
