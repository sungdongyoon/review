import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './Component/MyHeader';
import Counter from './Component/Counter';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';


function App() {

  return (
    <div className='App'>
      <Header/>
      <Body />
      <Footer/>
    </div>
  )
}

export default App;
