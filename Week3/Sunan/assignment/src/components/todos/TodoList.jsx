import { GrSubtractCircle } from "react-icons/gr";
import '../../style/todos/TodoList.scss';

const TodoList = ({ id, task, done, onDelete, onFinish })=> {
  return (
    <div className='todobox'>
      <div className="checkboxContainer">
        <input type='checkbox' id={id} className={`checkbox ${done? 'check':''}`} onClick={()=> onFinish(id)}/>
        <label htmlFor={id} className={`labelstyle ${done? 'strikethrough':''}`}> {task} </label> 
      </div>
      <button className="deleteButton" onClick={() => onDelete(id)}>
        <GrSubtractCircle className='icon'/>
      </button>
    </div>
  );
}   

export default TodoList;