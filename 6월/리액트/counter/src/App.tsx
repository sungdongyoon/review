import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Viewer from './Component/Viewer';
import Controller from './Component/Controller';
import Even from './Component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value: number) => {
    setCount(count + value);
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    console.log("count 업데이트: ");
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("포인트");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    }
  })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText}/>
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
