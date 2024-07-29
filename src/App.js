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
        <div style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
        }}
      >
      </div>
        <h1 className={`tab ${mode === 'stopwatch' ? 'active' : null}`}
            onClick={() => handleTabClick('stopwatch')}
            >스톱워치</h1>
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
      <div className="content">
        {mode === 'timer' ? <Timer /> : <Stopwatch />}
      </div>

    </div> 
  );
}

export default App;
