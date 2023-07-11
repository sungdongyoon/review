import React from 'react';
import "./TodoEditor.css";
import { useState, useRef } from 'react';
import userEvent from '@testing-library/user-event';

const TodoEditor = ({onCreate}) => {
  const [addTodo, setAddTodo] = useState("");
  const inputRef = useRef();
  const onSubmit = () => {
    if(!addTodo) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(addTodo);
      setAddTodo("");
    }
  }
  const onKeyDown = (e) => {
    if(e.keyCode === 13) {
      onSubmit();
    }
  }
  return (
    <div className='TodoEditor'>
      <span className='todayTodo'>오늘의 할 일</span>
      <div className='addForm'>
        <input onKeyDown={onKeyDown} ref={inputRef} onChange={(e) => setAddTodo(e.target.value)} value={addTodo} type='text' placeholder='할 일을 입력해주세요'/>
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </div>
  )
}

export default TodoEditor;
