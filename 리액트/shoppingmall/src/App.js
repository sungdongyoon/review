import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Components/Login';
import ProductAll from './Components/ProductAll';
import ProductDetail from './Components/ProductDetail';
import Navbar from './Components/Navbar';
import PrivateRouter from './Components/PrivateRouter';


function App() {
  const [authenticate, setAuthenticate] = useState(false); // true: 로그인 , false: 로그아웃 상태
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
