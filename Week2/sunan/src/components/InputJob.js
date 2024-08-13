import './InputJob.css';
import { useState } from 'react';
import TodoList from './TodoList';

function InputJob() {
  const [nextId, setNextId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    //비어있을때 추가하는거 막아줌
    if(tasks.length===5){
        alert("할 일이 너무 많습니다. 5개 이하로 넣어주세요.^^")
        setInputValue('');
        return;
    }

    const newTask = { id: nextId, title: inputValue, done: false};
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
    setInputValue('');
    // id와 제목을 인자로 가지는 newTask를 배열에 넣어주고 기존 tasks 배열을 복사해서 useState로 배열 최신화해줌 
  };
  const changeFinish = (id) => {
    // 해당 task를 찾고 'done' 상태를 변경해줌
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };
 
  
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div className="inputbox">
        <input
          className="text"
          placeholder="할 일을 입력하세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="addjobbutton" onClick={handleAddTask}>+</button>
      </div>
      <div>
        {tasks.length === 0 ? (
          <p className='noTaskFont'>할 일이 없습니다!!!</p>
        ) : (
          tasks.map(task => (
            <div>
                <TodoList key={task.id} id={task.id} task={task.title} done={task.done} onDelete={handleDeleteTask} onFinish={changeFinish}/>
                {tasks[tasks.length - 1 ].id !== task.id && <hr className='line' />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InputJob;
