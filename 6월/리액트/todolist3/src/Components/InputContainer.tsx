import React from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput';
import ShowInputButton from './ShowInputButton';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

const InputContainer = ({onAdd}: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(false);
  const onAddTodo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  }
  return (
    <>
      {showToDoInput && <TodoInput onAdd={onAdd}/>}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}/>
    </>
  )
}

export default InputContainer
