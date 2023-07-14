import React from 'react';
import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Editor from '../Components/Editor';


const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if(window.confirm("일기를 삭제하시겠습니까? 다시 복구되지 않습니다")) {
      onDelete(id);
      navigate('/', {replace: true});
    }
  }
  const onSubmit = (data) => {
    if(window.confirm("일기를 수정하시겠습니까?")) {
      const {date, content, emotionId} = data;
      onUpdate(id, date, content, emotionId);
      navigate('/', {replace: true});
    }
  }
  if(!data) {
    return <div>일기를 불러오고 있습니다</div>
  } else {
    return (
      <div>
        <Header title={"일기 수정하기"} leftchild={<Button text={"뒤로가기"} onClick={goBack}/>} rightchild={<Button text={"삭제하기"} type={"negative"} onClick={onClickDelete}/>}/>
        <Editor initData={data} onSubmit={onSubmit}/>
      </div>
    )
  }
}

export default Edit;
