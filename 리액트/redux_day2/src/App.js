import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {  
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}});
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "yoon", pw: "1234"}});
  }
  const decrease = () => {
    dispatch({type: "DECREMENT"})
  }
  return (
    <div className="App">
      <h1>ID: {id}</h1>
      <h1>PW: {pw}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrease}>감소</button>
      <Box/>
    </div>
  );
}

export default App;
