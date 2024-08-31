import { Link, useLocation } from "react-router-dom";
import '../styles/Todos.scss';
import Title from "../components/todos/Title";
import InsertForm from "../components/todos/InsertForm";
import TodoList from "../components/todos/TodoList";
import { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';

const Todos = () => {
    const [todoList, setTodoList] = useState([]); // 화면에 보여지는 todoList 생성
    const location = useLocation(); // useLocation 훅을 사용해서 현재 URL정보 가져오기

    // URL에서 title 가져오기
    const getTitle = () => {
      const params = new URLSearchParams(location.search); // '?'부터 반환

      return params.get('title') || "할 일 목록"; // title 값 반환.
    };
  
    useEffect(() => { // 페이지 로딩될 때 실행
      const fetchData = async () => { // todos 데이터 가져오는 함수
        const todos = await getTodos();
        setTodoList(todos); // 데이터를 todos에 저장
      };

      fetchData(); // 데이터 호출 실행
    }, []);
  
    const onInsert = async (content) => {
      const newTodo = { id: 0, text: content, done: false }; // 새로 생성할 todo 객체 기본형

      const addedTodo = await addTodo(newTodo); // addTodo()를 이용하여 put하고 
      setTodoList([...todoList, addedTodo]); // 현재 todoList에 반영
    };
  
    const onDelete = async (id) => {
      await deleteTodo(id); // id로 특정 데이터 삭제

      setTodoList(todoList.filter(todo => todo.id !== id)); // 현재 todoList에 반영
    };

    const onToggle = async (id) => {
      await updateTodo(id, { done: !todoList.find(todo => todo.id === id).done }); // id로 특정 데이터 토글한 상태로 업데이트

      setTodoList(todoList =>
        todoList.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      ); // 현재 todoList에 반영
    };
    
    const onEdit = async(id, newContent) => {
      await updateTodo(id, { text: newContent }); // id와 newContent를 받아 업데이트

      setTodoList(todoList.map(todo =>
        todo.id === id ? { ...todo, text: newContent } : todo
      )); // 현재 todoList에 반영
    }
  
    return (
      <div className="todos-container">
        <Title title={getTitle()}/>
        <InsertForm onInsert={onInsert} />
        <TodoList todoList={todoList} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit}/>
        <Link to="/"><button className="back-button">뒤로가기</button></Link>
        
      </div>
    );
  };

export default Todos;