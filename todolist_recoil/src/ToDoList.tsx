import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  todo: string,
}

const ToDoList = () =>  {
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.todo);
    setValue("todo", "");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("todo", {required: "Please Write a To Do"})} placeholder="Write a To Do"/>
        <button>Add</button>
      </form>
    </div>
  )
};

// const ToDoList = () =>  {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {currentTarget: {value}} = event;
//     setTodoError("");
//     setTodo(value);
//   }
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if(todo.length < 5) {
//       return setTodoError("To do should be longer");
//     }
//     console.log(todo);
//   }
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={todo} onChange={onChange} placeholder="Write a To Do"/>
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   )
// };

// interface IForm {
//   email: string,
//   firstName: string,
//   lastName: string,
//   userName: string,
//   password: string,
//   password1: string,
// }

// const ToDoList = () => {
//   const {register, watch, handleSubmit, formState: {errors}, setError,} = useForm<IForm>();
//   const onValid = (data: IForm) => {
//     if(data.password !== data.password1) {
//       setError("password1", {message: "password is not the same"});
//     };
//     console.log(data);
//   }
//   return (
//     <form onSubmit={handleSubmit(onValid)}>
//       <input {...register("email", {required: true, pattern: {
//         value: /^[A-Za-z0-9]+@naver.com/gm,
//         message: "Only naver.com emails allowed",
//       }})} placeholder="Email"/>
//       <span>{errors?.email?.message as string}</span>
//       <input {...register("firstName", {required: "write here", validate: (value) => !value.includes("test")})} placeholder="firstName"/>
//       <span>{errors?.firstName?.message as string}</span>
//       <input {...register("lastName", {required: "write here"})} placeholder="lastName"/>
//       <span>{errors?.lastName?.message as string}</span>
//       <input {...register("userName", {required: "write here"})} placeholder="userName"/>
//       <span>{errors?.userName?.message as string}</span>
//       <input {...register("password", {required: "write here", minLength: {value: 5, message: "Your password is too short"}})} placeholder="password"/>
//       <span>{errors?.password?.message as string}</span>
//       <input {...register("password1", {required: "write here"})} placeholder="password1"/>
//       <span>{errors?.password1?.message as string}</span>
//       <button>Add</button>
//     </form>
//   )
// };

export default ToDoList;
