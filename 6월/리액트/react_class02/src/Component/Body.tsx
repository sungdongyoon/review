import { useRef, useState } from "react";
import "./Body.css";

function Body() {
  const [text ,setText] = useState("");
  const textRef = useRef<any>(null);

  const handleOnChange = (e: any) => {
    setText(e.target.value);
  }

  const handleOnClick = () => {
    if(text.length < 5) {
      textRef.current.focus()
    } else {
      alert(text);
      textRef.current.value = "";
    }
  }

  return (
    <div>
      <input ref = {textRef} type="text" value={text} onChange={handleOnChange}/>
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  )
}

export default Body