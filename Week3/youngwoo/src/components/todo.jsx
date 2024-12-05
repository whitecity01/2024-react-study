import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import { HiTrash } from "react-icons/hi2";
import '../styles/todo.css';

const Todo = () => {
  let navigate = useNavigate();
  const serverUrl = 'https://todo2-72a38-default-rtdb.firebaseio.com'
  const[todos, setTodos]=useState([]);
  const[input, setInput]=useState('');
  const newId = useRef(1);

  useEffect(() => {
    const fetchTodo = async () => {
        try {
          const response = await axios.get(`${serverUrl}/todo.json`);
          if (response.status === 200) {
            const data = response.data ? Object.values(response.data) : [];
            setTodos(data);
            console.log(todos.length);
        } else {
          console.log('Failed to get');
        }
        } catch (error) {
          console.error('Error reading todo:', error);
      }
    };

    fetchTodo();
  }, []);

  const plusTodo = async () => {
    if(input.trim()){
      const maxId = todos.length ? Math.max(...todos.map(todo => todo.id)) : 0;
      const newTodo={
        id:maxId+1, //maxId++이 안되는 이유는? maxId는 const로 바뀌면 안되기 때문
        text:input,
        done:false
      };
      try {
        console.log(input);
        const response = await axios.put(`${serverUrl}/todo/${newTodo.id}.json`, newTodo);
        if(response.status === 200){
          setTodos([...todos, newTodo]);
          setInput('');
        }
        else {
          console.log('Failed to put', response);
      }
    } catch (error) {
        console.error('Error writing todo:', error);
    }
    }
  }
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      plusTodo();
    }
  };

  const todoChecking = async (id) => {
    try {
      const todoFind = todos.find(todo => todo.id === id);
      if(todoFind){ //아무것도 없을 수 있기 때문
        const doneTodo = { ...todoFind, done: !todoFind.done };
        const response = await axios.patch(`${serverUrl}/todo/${id}.json`, doneTodo);
        if (response.status === 200) {
            setTodos(todos.map(todo => (todo.id === id ? doneTodo : todo)));
        } else {
            console.log('Failed to patch', response);
        }
      }
      
  } catch (error) {
      console.error('Error updating todo:', error);
  }
  };

  const todoRemove = async (id) => {
    try {
      
      const response = await axios.delete(`${serverUrl}/todo/${id}.json`);
      if (response.status === 200) {
          setTodos(todos.filter(todo => todo.id !== id));
      } else {
          console.log('Failed to delete:', response);
      }
  } catch (error) {
      console.error('Error deleting todo:', error);
  }
  }

  return (
    <div>
      <button className='goToHome' onClick={ () => {
          navigate('/');
        } } ><IoIosArrowRoundBack /></button>
      <div className='AppBar'>일정관리</div>
      <div className='inputContainer'>
        <input className="todoInput" 
          type='text' 
          placeholder='할 일을 입력하세요' 
          value={input} 
          onChange={(e)=>setInput(e.target.value)} 
          onKeyDown={enterHandler}
        />
        <button className="plusButton" onClick={plusTodo}>+</button>
      </div>
      
      <div className="todo-list-container">
      {todos.filter(todo => todo).map((todo) => ( //null 같은 참조 오류를 막기 위함
        
          <div key={todo.id} className='todo-item'>
            <input className='checkbox'
              type="checkbox" 
              checked={todo.done} 
              onChange={() => todoChecking(todo.id)} 
            />
            
            <span className={`text ${todo.done? 'done':''}`}>{todo.text}</span>
            <span className='button'>
              <button onClick={() => todoRemove(todo.id)}><HiTrash /></button>
            </span>
          </div> 
      ))}
      </div>
    </div>
  );
};

export default Todo;