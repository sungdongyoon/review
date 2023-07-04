import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import Button from './Components/Button';
import DataView from './Components/DataView';
import Title from './Components/Title';
import TodoInput from './Components/TodoInput';
import InputContainer from './Components/InputContainer';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function App() {
  const [toDoList, setToDoList] = useState([
    "공부하기",
    "저녁먹기",
    "축구하기",
  ])
  const [toDo, setToDo] = useState("");
  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  }
  const onAdd = (toDo: string) => {
    if(toDo === "") return;
    setToDoList([...toDoList, toDo]);
    setToDo("");
  }
  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete}/>
      <InputContainer onAdd={onAdd}/>
    </Container>
  );
}

export default App;
