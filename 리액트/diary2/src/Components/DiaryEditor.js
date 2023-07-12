import React from 'react';
import { useState, useRef } from 'react';

const DiaryEditor = ({onCreate}) => {
  const authorRef = useRef();
  const contentRef = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: "😄",
  })
  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = () => {
    console.log(state);
    if(state.author.length < 1) {
      authorRef.current.focus();
      return;
    }
    if(state.content.length < 5) {
      contentRef.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장이 완료되었습니다!");
    setState({
      author: "",
      content: "",
      emotion: "😄",
    })
  }
  return (
    <div className='DiaryEditor'>
      <h1>My Diary</h1>
      <div className='diaryForm'>
        <input ref={authorRef} name='author' onChange={handleChange} value={state.author} type='text' placeholder='이름을 입력해주세요'/>
        <div>
          <textarea ref={contentRef} name='content' onChange={handleChange} value={state.content} type="text" placeholder='일기를 작성해주세요'/>
        </div>
        <div className='diaryEmotion'>
          <span>오늘의 감정 </span>
          <select name='emotion' onChange={handleChange} value={state.emotion}>
            <option value={"😄"}>😄</option>
            <option value={"🙂"}>🙂</option>
            <option value={"😐"}>😐</option>
            <option value={"😕"}>😕</option>
            <option value={"😠"}>😠</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  )
}

export default DiaryEditor;
