import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const TodoItem = ({label, onDelete}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button onClick={onDelete} label='삭제'/>
    </Container>
  )
}

export default TodoItem;
