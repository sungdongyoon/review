import { Children, useState, useRef } from "react"
import "./Body.css"

const Body = () => {
  const [text, setText] = useState("");
  const textRef = useRef<any>();
  const handleOnChange = (e: any) => {
    setText(e.target.value);
  }
  const handleOnClick = () => {
    if(text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      textRef.current.value = "";
    }
  }
  return (
    <div>
      <input ref={textRef} onChange={handleOnChange} value={text} type="text" />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  )
}

export default Body