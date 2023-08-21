import React from 'react';
import {DragDropContext, Droppable, Draggable, DropResult} from "react-beautiful-dnd";
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { toDoState } from './atoms';
import DraggableCard from './Components/DraggableCard';
import Board from './Components/Board';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: any) => {
    const {destination, draggableId, source} = info;
    // 보드 밖으로 이동해서 에러가 발생할 경우
    if (!destination) return;
    // 같은 보드에서 움직이는 경우
    if(destination.droppableId === source.droppableId) {
      setToDos((oldTodos) => {
        const copyTodos = [...oldTodos[source.droppableId]];
        const taskObj = copyTodos[source.index];
        copyTodos.splice(source.index, 1);
        copyTodos.splice(destination?.index, 0, taskObj);
        return {
          ...oldTodos, 
          [source.droppableId]: copyTodos,
        }
      });
    }
    // 다른 보드에서 움직이는 경우
    if(destination.droppableId !== source.droppableId) {
      setToDos((oldTodos) => {
        const sourceBoard = [...oldTodos[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...oldTodos[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...oldTodos, 
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard
        }
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]}/>
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  )
}

export default App;
