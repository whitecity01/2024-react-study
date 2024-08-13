import '../styles/Root.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Root = () => {
  const [todoTitle, setTodoTitle] = useState(""); // todos 제목
  const navigate = useNavigate(); // useNavigate 훅으로 todos 이동

  const handleInputChange = (e) => { // input 변화 감지
    setTodoTitle(e.target.value);
  };

  const handleGoToTodos = () => { // title변수를 넘겨주며 페이지 이동
    navigate(`/todos?title=${todoTitle}`);
  };

  return (
    <div className='root-container'>
      <h1>지원이의 API 다루기</h1>
      
      <input 
        type="text" 
        value={todoTitle} 
        onChange={handleInputChange} 
        placeholder="todos 제목을 입력하세요"
        className="title-input"
      />

      <button onClick={handleGoToTodos} className="nav-button">todos로 이동</button>
      <Link to="/myapp"><button className="nav-button">myapp으로 이동
      </button></Link>
      
    </div>
  );
}

export default Root;
