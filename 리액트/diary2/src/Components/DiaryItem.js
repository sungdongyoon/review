import React, { useRef } from 'react';
import { useState } from 'react';

const DiaryItem = ({id, author, content, emotion, createdDate, onDelete, onEdit}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const handleToggle = () => setIsEdit(!isEdit);
  const handleDelete = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  }
  const handelEdit = () => {
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    } else {
      if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
        onEdit(id, localContent);
        console.log(isEdit);
        handleToggle();
      }
    }
  }
  const handleExitEdit = () => {
    setIsEdit(false);
    setLocalContent(content)
  }
  return (
    <div className='DiaryItem'>
      <div className='diaryHeader'>
        <span className='author'>{author}의 Diary</span>
        <span className='emotion'>{emotion}</span>
        <span className='date'>{new Date(createdDate).toLocaleString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (<textarea ref={localContentInput} onChange={(e) => setLocalContent(e.target.value)} value={localContent} className='editArea'></textarea>) : content}
      </div>
      <div className='buttons'>
        {isEdit ? (
          <>
            <button className='deleteBtn' onClick={handleExitEdit}>수정취소</button>
            <button className='editBtn' onClick={handelEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button className='deleteBtn' onClick={handleDelete}>삭제하기</button>
            <button className='editBtn' onClick={handleToggle}>수정하기</button>
          </>
        )}
      </div>
    </div>
  )
}

export default DiaryItem;
