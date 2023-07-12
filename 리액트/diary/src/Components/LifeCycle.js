import React from 'react';
import { useState, useEffect } from 'react';

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Mount");
  // })
  // useEffect(() => {
  //   console.log("Mount");
  // }, [])
  useEffect(() => {
    console.log("Mount");
  }, [text])
  return (
    <div style={{padding: 20}}>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
    </div>
  )
}

export default LifeCycle;
