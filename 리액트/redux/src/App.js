import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Components/Box';

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}});
    // setCount(count + 1);
  }
  const decrese = () => {
    dispatch({type: "DECREMENT", payload: {num: 5}});
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "yoon", pw: "1234"}})
  }
  return (
    <div>
      <h1>ID: {id} PW: {pw}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrese}>감소</button>
      <Box />
    </div>
  );
}

export default App;
