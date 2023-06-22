import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Editor.css";
import { getFormattedDate, emotionList } from "./Util";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const Editor = ({initData, onSubmit}: any) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
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
  const handleChangeEmotion = (emotionId: any) => {
    setState({
      ...state,
      emotionId
    })
  }
  useEffect(() => {
    if(initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.data)))
      })
    }
  }, [initData])
  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((it: any) => (
            <EmotionItem
            key={it.id}
            {...it}
            onClick={handleChangeEmotion}
            isSelected={state.emotionId === it.id}
            />
            // <img key={it.id} src={it.img} alt={`emotion${it.id}`}/>
          ))}
        </div>
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