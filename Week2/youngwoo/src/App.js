import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
  const[todos, setTodos]=useState([]);
  const[input, setInput]=useState('');
  const newId = useRef(1);

  const plusTodo =() => {
    if(input !== ''){
      const newTodo={
        id:newId.current,
        text:input,
        checked:false
      };
      setTodos([...todos, newTodo]);
      setInput('');
      newId.current++;
    }
  }

  return (
    <div className="App">
      <div className='AppBar'>일정관리</div>
      <div className='inputContainer'>
        <input className="todoInput" type='text' placeholder='할 일을 입력하세요' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button className="plusButton" onClick={plusTodo}>+</button>
      </div>
      <TodoList className="todoList" todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
