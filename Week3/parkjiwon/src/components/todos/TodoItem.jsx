import React, { useState } from 'react';
import '../../styles/todos/TodoItem.scss';

const TodoItem = React.memo(({ todo, onDelete, onToggle, onEdit }) => {
  const { text, id, done } = todo;
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 초기화
  const [newContent, setNewContent] = useState(text); // 수정 내용

  const handleEdit = () => {
    setIsEditing(true); // 수정 모드로 전환
  };

  const handleSave = () => {
    onEdit(id, newContent); // 수정된 내용 업데이트
    setIsEditing(false); // 수정 모드 종료
  };

  const handleCancel = () => {
    setIsEditing(false); // 수정 모드 종료
    setNewContent(text); // 변경 사항없이 처음 값으로 유지
  };

  return (
    <div className='todo-item-container'>
      <button className='check-btn' onClick={() => onToggle(id)}>
        {done ? '✅' : '⬜️'}
      </button>
      {isEditing ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="todo-edit-input"
        />
      ) : (
        <div className={`todo-text ${done && 'checked'}`}>
          {text}
        </div>
      )}
      {isEditing ? (
        // <>로 그룹화
        <>
          <button className='save-btn' onClick={handleSave}>💾</button>
          <button className='cancel-btn' onClick={handleCancel}>✖️</button>
        </>
      ) : (
        <button className='edit-btn' onClick={handleEdit}>✐</button>
      )}
      <button className='delete-btn' onClick={() => onDelete(id)}>🗑️</button>
    </div>
  );
});

export default TodoItem;
