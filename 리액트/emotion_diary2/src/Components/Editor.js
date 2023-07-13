import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Editor.css';
import { getFormattedDate, emotionList } from '../utill';
import Button from './Button';
import EmotionItem from './EmotionItem';


const Editor = ({initData, onSubmit}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(initData) {
      setState({
        ...initData, date: getFormattedDate(new Date(parseInt(initData.date)))
      })
    }
  }, [initData])
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });
  const handleChangeDate = (e) => {
    setState({
      ...state, date: e.target.value, 
    })
  }
  const handleChangeContent = (e) => {
    setState({
      ...state, content: e.target.value,
    })
  }
  const handleSubmit = () => {
    onSubmit(state);
  }
  const handleGoBack = () => {
    navigate(-1);
  }
  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state, emotionId,
    })
  }
  return (
    <div className='Editor'>
      <div className='editor_section'>
        <h4>오늘의 날짜</h4>
        <div className='input_wrapper'>
          <input value={state.date} onChange={handleChangeDate} type='date'/>
        </div>
      </div>
      <div className='editor_section'>
        <h4>오늘의 감정</h4>
        <div className='input_wrapper emotion_list_wrapper'>
          {emotionList.map((it) => (
            <EmotionItem key={it.id} {...it} onClick={handleChangeEmotion} isSelected={state.emotionId === it.id}/>
          ))}
        </div>
      </div>
      <div className='editor_section'>
        <h4>오늘의 일기</h4>
        <textarea value={state.content} onChange={handleChangeContent} placeholder='오늘은 어땠나요?'/>
      </div>
      <div className='editor_section bottom_section'>
        <Button text={"취소하기"} onClick={handleGoBack}/>
        <Button text={"작성완료"} type="positive" onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Editor;
