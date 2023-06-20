import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState } from "react";

const TodoList = ({todo, onUpdate, onDelete}: any) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: any) => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it: any) => it.content.toLowerCase().includes(search.toLowerCase()))
  };
  return (
    <div className="TodoList">
      <h4>Todo List 🛒</h4>
      <input onChange={onChangeSearch} value={search} type="text" className="searchbar" placeholder="검색어를 입력하세요"/>
      <div className="list_wrapper">
        {getSearchResult().map((it: any) => <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>)}
      </div>
    </div>
  )
}

export default TodoList