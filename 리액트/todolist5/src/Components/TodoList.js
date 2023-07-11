import React from 'react';
import "./TodoList.css";
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
  const getResultSearch = () => {
    return search === "" ? todo : todo.filter((it) => 
    it.content.toLowerCase().includes(search.toLowerCase()));
  };
  const anaylizeTodo = useMemo(() => {
    // console.log("anaylizeTodo")
    const totalTodo = todo.length;
    const doneTodo = todo.filter((it) => it.isDone).length;
    const notDoneTodo = totalTodo - doneTodo;
    return {totalTodo, doneTodo,notDoneTodo,};
  }, [todo]);
  const {totalTodo, doneTodo, notDoneTodo} = anaylizeTodo;
  return (
    <div className='TodoList'>
      <div className='todoListTitle'>Todo List</div>
      <input onChange={(e) => setSearch(e.target.value)} value={search} className='todoListInput' type='text' placeholder='할 일을 검색해주세요'/>
      <div className='todo_count'>
        <div className='total_count'>오늘의 할 일 : {totalTodo}</div>
        <div className='done_count'>완료 : {doneTodo}</div>
        <div className='notDone_count'>미완료 : {notDoneTodo}</div>
      </div>
      {getResultSearch().map((it) => (
        <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
      ))}
    </div>
  )
}

export default TodoList;
