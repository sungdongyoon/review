import React from 'react';
import { useState, useContext } from 'react';
import { styled } from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import Title from './Title';
import { TodoListContext } from './TodoListContextProvider';
import {useNavigate} from 'react-router-dom';
import ShowInputButton from './ShowInputButton';

// interface Props {
//   readonly onClose: (toDo: string) => void;
// }

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoInput = () => {
  const navigate = useNavigate();
  const {onAdd} = useContext(TodoListContext);
  const [toDo, setTodo] = useState("");
  const onAddTodo = () => {
    if(toDo === "") return;

    onAdd(toDo);

    setTodo("");
  }
  return (
    <Container>
      <Contents>
        <Title label="할 일 추가"/>
        <InputContainer>
          <TextInput value={toDo} onChange={setTodo}/>
          <Button label='추가' color="#304ffe" onClick={onAddTodo}/>
        </InputContainer>
      </Contents>
      <ShowInputButton show={true} onClick={() => navigate('/')}/>
    </Container>
  )
}

export default TodoInput
