import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({onCreate}: any) => {
  const [content, setContent] = useState("");
  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }
  const inputRef = useRef<any>(null);
  const onSubmit = () => {
    if(!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  return (
    <div className="TodoEditor">
      <h4>새로운 todo 작성하기 🖋</h4>
      <div className="editor_wrapper">
        <input ref={inputRef} onChange={onChangeContent} value={content} type="text" placeholder="새로운 Todo..."/>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor;