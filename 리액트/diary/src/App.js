import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import LifeCycle from './Components/LifeCycle';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => it.id === targetId ? {...it, content: newContent} : it));
  }
  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
