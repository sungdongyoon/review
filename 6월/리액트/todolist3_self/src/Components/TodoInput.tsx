import React from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import Button from './Button';
import TextInput from './TextInput';
import Title from './Title';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 10px 0;
  padding-bottom: 60px;
  margin-top: 50px;
  background-color: white;
  border-radius: 10px;
`;

interface Props {
  readonly onAdd: (toDo: string) => void;
};

const TodoInput = ({onAdd}: Props) => {
  const [toDo, setToDo] = useState("");
  const onAddTodo = () => {
    if(toDo === "") return;
    onAdd(toDo);
    setToDo("");
  }
  return (
    <Container>
      <Background>
        <Content>
          <Title label="할 일 추가"/>
          <InputSection>
            <TextInput value={toDo} onChange={setToDo} />
            <Button label="추가" onClick={onAddTodo} color='#46458C'/>
          </InputSection>
        </Content>
      </Background>
    </Container>
  )
}

export default TodoInput
