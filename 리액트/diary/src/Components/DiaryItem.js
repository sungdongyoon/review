import React from 'react';
import { useState, useRef } from 'react';

const DiaryItem = ({id, author, content, emotion, created_date, onDelete, onEdit}) => {
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const handleQuiteEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }
  const handleDelete = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };
  const handleEdit = () => {
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    } else {
      if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
        onEdit(id, localContent);
        toggleIsEdit();
      }
    }
  }
  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span className='author_info'>작성자: {author} | 감정: {emotion}</span><br/>
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
        <div className='content'>
          {isEdit ? (<textarea ref={localContentInput} onChange={(e) => setLocalContent(e.target.value)} value={localContent}></textarea>) : content}
        </div>
        {isEdit ? (
          <>
            <button onClick={handleQuiteEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
      </div>
    </div>
  )
}

export default DiaryItem;
