import React from 'react';
import "./TodoList.css";
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const TodoList = ({todo, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it) => (
      it.content.toLowerCase().includes(search.toLowerCase())
    ))
  };
  const analyzeTodo = useMemo(() => {
    console.log('anaylizeTodo 함수 호출')
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount, doneCount, notDoneCount
    };
  }, [todo])
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;
  return (
    <div className='TodoList'>
      <h4>Todo List🎵</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료한 할 일 : {doneCount}</div>
        <div>해야할 일 : {notDoneCount}</div>
      </div>
      <input onChange={onChangeSearch} value={search} className='searchbar' placeholder='검색어를 입력하세요'/>
      <div className='list_wrapper'>
        {getSearchResult().map((it) => (
          <TodoItem onDelete={onDelete} onUpdate={onUpdate} key={it.id} {...it} />
        ))}
      </div>
    </div>
  )
}

export default TodoList;
