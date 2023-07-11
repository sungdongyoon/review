import React from 'react';
import "./TodoItem.css";

const TodoItem = ({id, isDone, content, createDate, onDelete, onUpdate}) => {
  const DeleteList = () => {
    onDelete(id);
  }
  const UpdateList = () => {
    onUpdate(id);
  }
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input onChange={UpdateList} checked={isDone} type='checkbox'/>
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>{new Date(createDate).toLocaleDateString()}</div>
      <div className='button_col'>
        <button onClick={DeleteList}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem;
