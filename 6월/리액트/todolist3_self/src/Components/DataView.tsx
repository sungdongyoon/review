import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import Title from './Title';
import TodoList from './TodoList';


const Container = styled.div`
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete: (toDo: string) => void;
}

const DataView = ({toDoList, onDelete}: Props) => {
  return (
    <Container>
      <Title label="할 일 목록"/>
      <TodoList toDoList={toDoList} onDelete={onDelete}/>
    </Container>
  )
}

export default DataView
