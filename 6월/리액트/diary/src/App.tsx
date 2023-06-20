import React from 'react';
import logo from './logo.svg';
import './App.css';
import DiaryEditor from './component/DiaryEditor';
import DiaryList from './component/DiaryList';
import { useState, useRef } from 'react';

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
  const onRemove = (targetId: any) => {
    const newDiaryList = data.filter((it:any) => 
      it.id !== targetId);
      setData(newDiaryList);
  };
  const onEdit = (targetId: any, newContent: any) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content: newContent} : it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default App;
