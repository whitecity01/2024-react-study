import { useState, useCallback, useRef } from 'react';

import './App.scss';
import Title from './components/Title';
import InsertForm from './components/InsertForm';
import TodoList from './components/TodoList';

const App = () =>{
  const [todoList, setTodoList] = useState([]); // todo 기록 배열 
  const nextId = useRef(1); // todo의 key 처음은 1

  const onInsert = useCallback( // todoList에 입력폼으로 받은 내용을 추가하는 함수
    content => { // content를 입력받아 객체로 생성
      const todo = { // todo 객체
        id: nextId.current,
        content,
        checked: false,
      }

      setTodoList(prevTodoList => [...prevTodoList, todo]); // 이전배열에 새 todo객체 추가
      nextId.current += 1;
    }, []
  );

  const onDelete = useCallback( // todoList의 특정 요소를 지우는 함수
    id => {
      setTodoList(prevTodoList => {
          const targetIdx = prevTodoList.findIndex(todo => todo.id === id); // 요소의 id를 받아 해당 요소의 index 찾기

          return [
            ...prevTodoList.slice(0, targetIdx), // 제거할 요소의 앞 부븐
            ...prevTodoList.slice(targetIdx + 1), // 제거할 요소 뒷 부분
          ];
        }
      );
    }, []
  );

  const onToggle = useCallback( // todoList의 특정 요소를 토글하는 함수
    id => {
      setTodoList(prevTodoList => {
        const targetIdx = prevTodoList.findIndex(todo => todo.id === id); // 요소의 id를 받아 해당 요소의 index 찾기
        const target = prevTodoList[targetIdx]; // 해당 객체

        return [
          ...prevTodoList.slice(0, targetIdx), // 토글할 요소의 앞 부븐
          {...target, checked: !target.checked}, // 토글할 요소의 checked속성 토글하며 삽입
          ...prevTodoList.slice(targetIdx + 1), // 토글할 요소 뒷 부분
        ];
      }
      );
    }, []
  );

  return (
    <div className='app-container'>
      <div className='todo-container'>
        <Title />
        <InsertForm onInsert={onInsert} />
        <TodoList todoList={todoList} onDelete={onDelete} onToggle={onToggle}/>
      </div>
    </div>
  );
}

export default App;
