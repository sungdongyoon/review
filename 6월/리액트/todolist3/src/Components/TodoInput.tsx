import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';
import Title from './Title';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: cetner;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.75);
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

const TodoInput = ({onAdd}: Props) => {
  const [toDo, setTodo] = useState("");
  const onAddTodo = () => {
    if(toDo === "") return;

    onAdd(toDo);

    setTodo("");
  }
  return (
    <Container>
      <Background>
        <Contents>
          <Title label="할 일 추가"/>
          <InputContainer>
            <TextInput value={toDo} onChange={setTodo}/>
            <Button label='추가' color="#304ffe" onClick={onAddTodo}/>
          </InputContainer>
        </Contents>
      </Background>
    </Container>
  )
}

export default TodoInput
