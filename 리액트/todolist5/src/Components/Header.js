import React from 'react';
import "./Header.css";

const Header = () => {
  const date = new Date();
  return (
    <div className='Header'>
      <div className='title'>TodoList</div>
      <div className='date'>{`${date.getFullYear()}년${String(date.getMonth() + 1).padStart("2", 0)}월${String(date.getDate()).padStart("2", 0)}일`}</div>
    </div>
  )
}

export default Header;
