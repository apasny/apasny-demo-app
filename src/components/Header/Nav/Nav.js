import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (

      <ul className="nav">
          <li className="nav__item"><Link to="/about">about me</Link></li>
          <li className="nav__item"><Link to="/portfolio">portfolio</Link></li>
          <li className="nav__item logo"><Link to="/">ya</Link></li>
          <li className="nav__item"><Link to="/blog">my blog</Link></li>
          <li className="nav__item"><Link to="/contact">contact me</Link></li>
      </ul>

  )
}

export default Nav;