import logo from './logo.svg';
import './App.css';
import { getEmotionImgbyId } from './utill';
import { Routes, Route, Link } from 'react-router-dom';
import { useReducer, useRef } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":{
      return [action.data, ...state]
    }
    case "UPDATE": {
      return state.map((it) => String(it.id) === String(action.data.id) ? {...action.data} : it);
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId))
    }
  }
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(1);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      }
    })
    idRef.current += 1;
  }
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      }
    })
  }
  const onDelete = (targetId) => {
    dispatch({type: "DELETE", targetId});
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
        <Link to={'/edit'}>Edit</Link>
      </div>
    </div>
  );
}

export default App;
