import React from 'react';
import { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const TodoListContext = createContext<Context>({toDoList: [], onAdd: (): void => {}, onDelete: (): void => {}});
// createContext의 인자값은 TodoListContextProvider.tsx가 감싸고 있는 컴포넌트들에게 전달할 값,
//즉 DataView.tsx랑 InputContainer.tsx가 받아갈 값들을 넣어준다
// toDoList는 배열, onAdd와 onDelete는 함수로 타입정의

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TodoListContextProvider = ({children}: Props) => {
  const [toDoList, setToDoList] = useState([
    "리액트 공부하기",
    "운동하기",
    "책 읽기",
  ]);
  const onAdd = (toDo: string) => {
    if(toDo === "") return;
    setToDoList([...toDoList, toDo]);
  };
  const onDelete = (toDo: string) => {
    
    setToDoList(toDoList.filter((item) => item !== toDo));
  }
  return (
    <TodoListContext.Provider value={{toDoList, onAdd, onDelete}}>
      {children}
    </TodoListContext.Provider>
  )
}

export {TodoListContextProvider, TodoListContext};


// 인자값인 childern은 DataView와 InputContaine가 가져가는 값이다
// export default는 기본적으로 하나의 값만 전달하기 때문에 default를 지워주고 중괄호로 묶어서 값을 하나 더 추가해준다.