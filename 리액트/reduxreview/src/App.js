import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);
  const dispatch = useDispatch();
  const increse = () => {
    dispatch({type: 'INCREMENT'});
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "yoon", pw: "1234"}});
  }
  const decrese = () => {
    dispatch({type: 'DECREMENT'});
  }
  return (
    <div className='App'>
      <button onClick={increse}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrese}>감소</button>
      <div>{count}</div>
      <div>{id}</div>
      <div>{pw}</div>
    </div>
  );
}

export default App;
