import React from 'react';
import Nav from './Nav/Nav';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="dashed_line bottom"></div>
    </div>
  )
}

export default Header;