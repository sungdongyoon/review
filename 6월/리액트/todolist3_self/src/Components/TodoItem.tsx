import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Label = styled.div`
  font-size: 16px;
  margin-right: 100px;
  f
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

const TodoItem = ({label, onDelete}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button onClick={onDelete} label="삭제"/>
    </Container>
  )
}

export default TodoItem
