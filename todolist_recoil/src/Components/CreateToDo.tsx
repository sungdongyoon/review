import React from 'react';
import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import { toDoState, IToDo } from './Atoms';

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState)
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos((oldToDos) => [{id: Date.now(), text: toDo, category: "TO_DO"}, ...oldToDos]);
    setValue("toDo", "");
  };
  return (
  <form onSubmit={handleSubmit(handleValid)}>
    <input {...register("toDo", {required: "Please Write a To Do..."})} placeholder="Please Write a To Do"/>
    <button>Add</button>
  </form>
  )
}

export default CreateToDo;
