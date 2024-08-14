import { useEffect, useRef, useState } from "react";
import "styles/todo/TodoInput.scss";
const TodoInput = ({ setTodoList, addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodoHandler = async () => {
    if (newTodo === "") return;

    await addTodo(newTodo);
    setNewTodo("");
    inputRef.current.focus();
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      addTodoHandler();
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
      <button className="todo-input-btn" type="button" onClick={addTodoHandler}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
