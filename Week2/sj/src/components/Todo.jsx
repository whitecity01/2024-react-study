import { useRef, useState } from "react";
import "../styles/Todo.scss";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoTitle from "./TodoTitle";
const Todo = () => {
  const nextId = useRef(1);
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoInput nextId={nextId} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
