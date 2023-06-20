import React, { useState,useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import DiaryEditor from './component/DiaryEditor';
import DiaryList from './component/DiaryList';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author: string, content: string, emotion: any) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data])
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList/>
    </div>
  );
}

export default App;
