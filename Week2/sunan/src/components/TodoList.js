import { GrSubtractCircle } from "react-icons/gr";
import './TodoList.css';

function TodoList({ id, task, done, onDelete, onFinish }) {
  return (
    <div className='todobox'>
      <div className="checkboxContainer">
        <input className='checkbox' type='checkbox' id={id} name='todo' value={id} onClick={()=> onFinish(id)}/>
        <label htmlFor={id} className={done? 'strikethrough':''}> {task} </label> 
      </div>
      <button className="deleteButton" onClick={() => onDelete(id)}>
        <GrSubtractCircle className='icon'/>
      </button>
    </div>
  );
}

export default TodoList;
