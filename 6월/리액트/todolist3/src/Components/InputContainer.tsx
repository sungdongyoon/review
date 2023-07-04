import React from 'react';
import { useState } from 'react';
import TodoInput from './TodoInput';
import ShowInputButton from './ShowInputButton';

// interface Props {
//   readonly onAdd: (toDo: string) => void;
// }

const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);
  const onClose = (toDo: string) => {
    // onAdd(toDo);
    setShowToDoInput(false);
  }
  return (
    <>
      {showToDoInput && <TodoInput/>}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)}/>
    </>
  )
}

export default InputContainer
