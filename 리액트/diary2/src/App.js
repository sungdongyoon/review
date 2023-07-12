import logo from './logo.svg';
import './App.css';
import DiaryEditor from './Components/DiaryEditor';
import DiaryList from './Components/DiaryList';
import { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);
  const onCreate = (author, content, emotion) => {
    const createdDate = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdDate,
      id: dataId.current,
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => it.id === targetId ? {...it, content: newContent} : it));
  }
  const onDelete = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
