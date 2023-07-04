import React from 'react';
import './App.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Title from './Components/Title';
import Button from './Components/Button';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import DataView from './Components/DataView';
import TextInput from './Components/TextInput';
import TodoInput from './Components/TodoInput';
import ShowInputButton from './Components/ShowInputButton';
import InputContainer from './Components/InputContainer';
import {TodoListContextProvider} from './Components/TodoListContextProvider';
import Header from './Components/Header';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '축구하기',
    '게임하기'
  ]);
  // const [toDo, setTodo] = useState("");

  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo))
  }
  const onAdd = (toDo: string) => {
    if(toDo === "") return;

    setToDoList([...toDoList, toDo])
    // => toDoList의 값과 toDo 값이 추가된다
    // setTodo("");
  }
  return (
    <Container>
      <TodoListContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<DataView/>} />
          <Route path='/add' element={<TodoInput />}/>
          <Route path='*' element={
            <>
            404
            <br/>
            NotFound
            </>
          }/>
        </Routes>
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
