import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import { useContext } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Editor from '../Components/Editor';


const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  const onSubmit = (data) => {
    const {date, content, emotionId} = data;
    onCreate(date, content, emotionId);
    navigate('/', {replace: true});
  }
  return (
    <div className='New'>
      <Header title={"새 일기 쓰기"} leftchild={<Button text={"뒤로가기"} onClick={goBack}/>}/>
      <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New;
