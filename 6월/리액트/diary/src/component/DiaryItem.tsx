import { useState, useRef } from "react";
import { create } from "domain"

const DiaryItem = ({onEdit ,onRemove, author, content, emotion, create_date, id}: any) => {
  const handleClickRemove = () => {
    if(window.confirm(`${id + 1}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  
  const localContentInput = useRef<any>();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleEdit = () => {
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  }

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          작성자 : {author} | 감정 : {emotion}
        </span>
        <span className="date">
          {new Date(create_date).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (<textarea ref={localContentInput} value={localContent} onChange={(e: any) => setLocalContent(e.target.value)}/>) : (content)}
      </div>
        {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
        ) : (
          <>
          <button onClick={handleClickRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>)
        }
    </div>
  )
}

export default DiaryItem