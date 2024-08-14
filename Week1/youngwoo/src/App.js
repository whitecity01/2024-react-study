import React, { useState } from 'react';
import './App.css';
import Timer from './timer';
import Stopwatch from './stopwatch';

function App() {
  const [mode, setMode] = useState('timer');

  const handleTabClick = (tab) => {
    setMode(tab);
  };

  return (
    <div className='container'>

      <div className="menu">

        <h1 className={`tab ${mode === 'timer' ? 'active' : null}`}
            onClick={() => handleTabClick('timer')}
            style={{marginTop: 100}}
            >타이머</h1>
        <div className="line">
      </div>
        <h1 className={`tab ${mode === 'stopwatch' && 'active'}`}
            onClick={() => handleTabClick('stopwatch')}
            >스톱워치</h1>
      </div>

      <div className='empty-space'></div>
      <div className='divider'>
            </div>
      <div className="content">
        {mode === 'timer' ? <Timer /> : <Stopwatch />}
      </div>

    </div> 
  );
}

export default App;
