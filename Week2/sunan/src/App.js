import './App.css';
//import {useState} from 'react';
import InputJob from './components/InputJob';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <div className='container'>
        <div className='title'>일정관리</div>
        <InputJob/>
      </div>
    </div>
  );
}

export default App;