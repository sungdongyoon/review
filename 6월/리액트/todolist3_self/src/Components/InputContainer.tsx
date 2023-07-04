import React from 'react';
import TodoInput from './TodoInput';
import ShowInputButton from './ShowInputButton';
import { useState } from 'react';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

const InputContainer = ({onAdd}: Props) => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onAddTodo = (toDo: string) => {
    onAdd(toDo);
  }
  return (
    <div>
      {showTodoInput && <TodoInput onAdd={onAdd}/>}
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)}/>
    </div>
  )
}

export default InputContainer
