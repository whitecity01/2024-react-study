import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../styles/TodoList.scss";
const TodoList = ({ todoList, setTodoList }) => {
  const doneHandler = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteHandler = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo-item">
          <button
            className={`todo-isdone ${todo.isDone && "checked"}`}
            type="button"
            onClick={() => doneHandler(todo.id)}
          >
            {todo.isDone === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </button>

          <div className={`todo-work ${todo.isDone && "checked"}`}>
            {todo.work}
          </div>

          <button
            className="todo-delete"
            type="button"
            onClick={() => deleteHandler(todo.id)}
          >
            <MdRemoveCircleOutline />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
