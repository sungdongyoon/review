import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';


const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime()
  },
]
function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content: any) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime()
    };
    setTodo([newItem, ...todo])
    idRef.current += 1;
  };
  const onUpdate = (targetId: any) => {
    setTodo(todo.map((it: any) => {
      if(it.id === targetId) {
        return {
          ...it,
          isDone: !it.isDone
        }
      } else {
        return it
      }
    }))
  }
  const onDelete = (targetId: any) => {
    setTodo(todo.filter((it: any) => it.id !== targetId))
  }
  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
