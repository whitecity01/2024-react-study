import '../../style/todos/InputJob.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import TodoList from '../../components/todos/TodoList';
import { getTodos, putTodos, updateTodos, deleteTodos } from '../../services/todos/crudtodos';

function InputJob() {
  const [nextId, setNextId] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const todos = await getTodos();
        const validTodos = todos.filter(task => task !== null);  // null 값 제거
        setTasks(validTodos || []);

        if (validTodos.length > 0) {
          const maxId = Math.max(...validTodos.map(task => task.id));
          setNextId(maxId + 1);
        }
      } catch (error) {
        console.error('에러발생', error);
      }
    };
    fetchTasks(); 
  }, []);

  const handleAddTask = async () => {
    if (inputValue.trim() === '') return;

    const newTask = { id: nextId, title: inputValue, done: false };
    try {
      await putTodos(nextId, newTask);
      setTasks([...tasks, newTask]); 
      setNextId(nextId + 1);
      setInputValue('');
    } catch (error) {
      console.error('추가에러', error);
    }
  };

  const changeFinish = async (id) => {
    const updatedTask = tasks.find(task => task.id === id);
    if (!updatedTask) return;
    const updatedTaskData = { ...updatedTask, done: !updatedTask.done };
    try {
      await updateTodos(id, { done: updatedTaskData.done });
      const updatedTasks = tasks.map(task =>
        task.id === id ? updatedTaskData : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('업뎃에러', error);
    }
  };

  const handleDeleteTask = async (id) => { 
    try {
        await deleteTodos(id);
        setTasks(tasks => tasks.filter(task => task.id !== id));
    } catch (error) {
        console.error('삭제에러', error);
    }
};

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="title">
        <IoIosArrowRoundBack className='back-icon' onClick={goBack}/>
        <h1>투두리스트📝</h1>
      </div>
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
          tasks
            .filter(task => task !== null)  // null 값 제거
            .map(task => (
              <div key={task.id}>
                <TodoList id={task.id} task={task.title} done={task.done} onDelete={handleDeleteTask} onFinish={changeFinish}/>
                {tasks[tasks.length - 1].id !== task.id && <hr className='line' />}
              </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InputJob;