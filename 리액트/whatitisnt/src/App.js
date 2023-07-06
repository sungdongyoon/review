import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import { useState } from 'react';
import Header from './Components/Header';
import ProductAll from './Components/ProductAll';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import PrivateRouter from './Components/PrivateRouter';

function App() {
  const [authentic, setAutentic] = useState(false);
  return (
    <div>
      <Header authentic={authentic} setAutentic={setAutentic}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAutentic={setAutentic}/>}/>
        <Route path='/products/:id' element={<PrivateRouter authentic={authentic}/>}/>
      </Routes>
    </div>
  );
}

export default App;
