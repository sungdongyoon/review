import { useState } from "react";

const DiaryEditor = ({onCreate}: any) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  });
  const handleChangeState = (e: any) => {
    setState({...state, [e.target.name]: e.target.value});
  }
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input type="text" placeholder="작성자"/>
      </div>
      <div>
        <textarea name="" placeholder="일기"></textarea>
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select name="">
          <option value="{1}">1</option>
          <option value="{2}">2</option>
          <option value="{3}">3</option>
          <option value="{4}">4</option>
          <option value="{5}">5</option>
        </select>
      </div>
      <div>
        <button>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor;