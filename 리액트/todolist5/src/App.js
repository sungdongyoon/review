import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';
import { useState, useRef, useReducer } from 'react';

const mock = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "저녁먹기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    createDate: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.newItem, ...state];
    case "UPDATE":
      return state.map((it) => it.id === action.targetId ? {...it, isDone: !it.isDone} : it);
    case "DELETE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  // const [todo, setTodo] = useState(mock);
  const [todo, dispatch] = useReducer(reducer, mock);
  const idRef = useRef(3);
  const onCreate = (content) => {
    dispatch({type: "CREATE", newItem: {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    }})
    // setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    // setTodo(todo.map((it) => 
    //   it.id === targetId ? {...it, isDone: !it.isDone} : it));
    dispatch({type: "UPDATE", targetId})
  };
  const onDelete = (targetId) => {
    // setTodo(todo.filter((it) => it.id !== targetId));
    dispatch({type: "DELETE", targetId})
  };
  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList onDelete={onDelete} onUpdate={onUpdate} todo={todo}/>
    </div>
  );
}

export default App;
