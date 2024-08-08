import { GrSubtractCircle } from "react-icons/gr";
import './TodoList.css';
function TodoList({id, task}){
    
    return <div className='todobox'>
        <div className="checkboxContainer">
            <input className='checkbox' type='checkbox' id={id} name='todo' value={id}/>
            <label htmlFor={id}> {task} </label> 
        </div>
        <button className="deleteButton"><GrSubtractCircle className='icon'/></button>
    </div>;
}
export default TodoList;