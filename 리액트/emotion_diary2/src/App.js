import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useReducer, useRef, useEffect, useState, useContext } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  switch(action.type) {
    case "INIT":
      return action.data;
    case "CREATE":{
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE": {
      const newState = state.map((it) => String(it.id) === String(action.data.id) ? {...action.data} : it);
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState; 
    }
    case "DELETE": {
      const newState = state.filter((it) => String(it.id) !== String(action.targetId));
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
}

const mockData = [
  {
    id: 1,
    date: new Date().getTime() - 1,
    content: 'mock1',
    emotionId: 1,
  },
  {
    id: 2,
    date: new Date().getTime() - 2,
    content: 'mock2',
    emotionId: 2,
  },
  {
    id: 3,
    date: new Date().getTime() - 3,
    content: 'mock3',
    emotionId: 3,
  },
]

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(1);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("diary")) || [];
    idRef.current = localData.length > 0 ? localData.sort((a,b) => +b.id - +a.id)[0].id + 1 : idRef.current;
    console.log(idRef.current)
    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, [])
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
  if(!isDataLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/new' element={<New/>}/>
              <Route path='/diary/:id' element={<Diary/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  };
}

export default App;
