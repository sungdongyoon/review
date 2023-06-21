import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Editor.css";
import { getFormattedDate } from "./Util";
import Button from "./Button";

const Editor = ({initData, onSubmit}: any) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotion: 3,
    content: ""
  });
  const handleChangeDate = (e: any) => {
    setState({
      ...state,
      date: e.target.value
    });
  }
  const handleChangeContent = (e: any) => {
    setState({
      ...state,
      content: e.target.value
    });
  }
  const handleSubmit = () => {
    onSubmit(state);
  }
  const handleOnGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <Button text={"취소하기"} type={""} onClick={handleOnGoBack}/>
        <Button text={"작성완료"} type={"positive"} onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Editor;