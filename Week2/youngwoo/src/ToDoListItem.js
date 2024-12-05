import './ToDoListItem.css';
import { HiTrash } from "react-icons/hi2";

function ToDoListItem({todo, checking, remove}) {

  return (
    <div className="item">
      <input className='checkbox'
        type="checkbox" 
        checked={todo.checked} 
        onChange={() => checking(todo.id)} 
      />
      
      <span className='text'>{todo.text}</span>
      <span className='button'>
        <button onClick={() => remove(todo.id)}><HiTrash /></button>
      </span>
    </div>
  );
}

export default ToDoListItem;