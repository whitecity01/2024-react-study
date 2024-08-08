import './InputJob.css';
import {useState} from 'react';
function InputJob(props){
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(0);
    const [tasks, setTasks] = useState([]);  
    return <div className="inputbox"> 
        <input className='text' placeholder="할 일을 입력하세요." onClick={(event)=>{
            const task = event.target.title.value;
            const newTask ={id: nextId, title: task};
            const newTasks = [...tasks, newTask];
            setTasks(newTasks)
            setNextId(nextId+1);
        }}></input>
        <button className='addjobbutton'>+</button>
    </div>;
}
export default InputJob;