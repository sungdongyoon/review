import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';
import { type } from 'os';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete: (toDo: string) => void;
}

const TodoList = ({toDoList, onDelete}: Props) => {
  return (
    <Container>
      {toDoList.map((toDo) => (
        <TodoItem key={toDo} label={toDo} onDelete={() => {
          if(typeof onDelete === 'function') onDelete(toDo)
        }}/>
      ))}
    </Container>
  )
}

export default TodoList
