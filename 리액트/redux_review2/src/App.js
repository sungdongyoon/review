import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './Box';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count)
  // const [count, setCount] = useState(0);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const inCrease = () => {
    dispatch({type: "INCREASE", payload: {num: 5}});
    // setCount(count + 1);
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "yoon", pw: '1234'}});
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={inCrease}>증가</button>
      <button onClick={login}>로그인</button>
      <div>{id}  {pw}</div>
      <Box/>
    </div>
  );
}

export default App;
