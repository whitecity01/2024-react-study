import { useEffect, useRef, useState } from "react";
import "../styles/TodoInput.scss";
const TodoInput = ({ nextId, setTodoList }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo === "") return;
    const new_todo = {
      id: nextId.current,
      work: newTodo,
      isDone: false,
    };
    setTodoList((prev) => [...prev, new_todo]);
    nextId.current += 1;
    setNewTodo("");
    inputRef.current.focus();
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요."
        value={newTodo}
        onChange={newTodoHandler}
        onKeyDown={enterHandler}
      />
      <button className="todo-input-btn" type="button" onClick={addTodo}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
