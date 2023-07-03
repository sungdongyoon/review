import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList: ReadonlyArray<string>
  readonly onDelete?: (toDo: string) => void;
}

const TodoList = ({toDoList, onDelete}: Props) => {
  return (
    <Container>
      {toDoList.map((toDo) => (
        <TodoItem
        key={toDo}
        label={toDo}
        onDelete={() => {
          if(typeof onDelete === 'function') onDelete(toDo)
        }}/>
      ))}
    </Container>
  )
}

export default TodoList;

// key값을 설정하는 이유
// 1번부터 10번까지 값이 있는데 1번값이 삭제되었을 경우 2번~10번 값이 다시 렌더링 된다
// key값이 없으면 다시 렌더링될 때 기존 2번~10번값과 매칭이 안되기 때문에 key값을 줘서 매칭 시켜줘야 한다
