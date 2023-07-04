import React from 'react';
import { styled } from 'styled-components';
import Title from './Title';
import TodoList from './TodoList';
import ShowInputButton from './ShowInputButton';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
`;

// interface Props {
//   readonly onDelete?: (toDo: string) => void;
//   readonly toDoList: ReadonlyArray<string>;
// }

const DataView = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title label='할 일 목록'/>
      <TodoList/>
      <ShowInputButton show={false} onClick={() => navigate('/add')} />
    </Container>
  )
}

export default DataView;



// DataView는 TodoList를 감싸주기 위해 생성