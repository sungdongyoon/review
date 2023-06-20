import React from 'react';
import logo from './logo.svg';
import './App.css';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text ,setText] = useState("");
  const handleSetCount = (value: any) => {
    setCount(count + value);
  };
  const handleChangeText = (e: any) => {
    setText(e.target.value);
  }
  useEffect(() => {
    console.log("컴포넌트 업데이트");
  }, []);
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜박")
    }, 1000);

    return () => {
      console.log("클린업")
      clearInterval(intervalID);
    }
  })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} type="text" onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
