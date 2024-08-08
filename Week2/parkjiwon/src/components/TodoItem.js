import React from 'react';
import './TodoItem.scss';

const TodoItem = React.memo(({todo, onDelete, onToggle}) =>{ // React.memo로 변화가 없으면 리렌더링 하지 않음.
  const { content, id , checked} = todo;

  return(
    <div className='todo-item-container'>
      {/* checked 값에 따라 변화 */}
      <button className='check-btn'  onClick={()=>onToggle(id)}>
        {checked ? '✅' : '⬜️'}
      </button>
      <div className={`todo-text ${checked && 'checked'}`}>
        {content}
      </div>
      <button className='delete-btn' onClick={()=>onDelete(id)}>❌</button>
    </div>
  );
});

export default TodoItem;