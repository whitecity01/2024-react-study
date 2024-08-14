import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "styles/todo/TodoList.scss";
const TodoList = ({ todoList, updateTodo, deleteTodo }) => {
  const doneHandler = (id) => {
    updateTodo(id);
  };

  const deleteHandler = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="todo-list-container">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo-item">
          <button
            className={`todo-isdone ${todo.done && "checked"}`}
            type="button"
            onClick={() => doneHandler(todo.id)}
          >
            {todo.done === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </button>

          <div className={`todo-work ${todo.done && "checked"}`}>
            {todo.text}
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
