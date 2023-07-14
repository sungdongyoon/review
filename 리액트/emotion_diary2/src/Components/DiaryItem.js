import './DiaryItem.css';
import { getEmotionImgbyId } from '../utill';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Button from './Button';

const DiaryItem = ({content, id, emotionId, date}) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  }
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }
  return (
    <div className='DiaryItem'>
      <div className={["img_section", `img_section_${emotionId}`].join(" ")} onClick={goDetail}>
        <img src={getEmotionImgbyId(emotionId)} alt={`emotion${emotionId}`}/>
      </div>
      <div className='info_section' onClick={goDetail}>
        <div className='date_wrapper'>
          {new Date(date).toLocaleDateString()}
        </div>
        <div className='content_wrapper'>
          {content.slice(0, 25)}
        </div>
      </div>
      <div className='button_section'>
        <Button text="수정하기" onClick={goEdit}/>
      </div>
    </div>
  )
}

export default DiaryItem;
