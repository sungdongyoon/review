import React from 'react';
import { IToDo, toDoState } from './Atoms';
import { useSetRecoilState } from 'recoil';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}} = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newTodo = {id, text, category: name as any};
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex+1),
      ];
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && <button name='DOING' onClick={onClick}>Doing</button>}
      {category !== "TO_DO" && <button name='TO_DO' onClick={onClick}>To Do</button>}
      {category !== "DONE" && <button name='DONE' onClick={onClick}>Done</button>}
    </li>
  )
}

export default ToDo;
