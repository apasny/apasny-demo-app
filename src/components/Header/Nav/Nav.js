import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (

      <ul className="nav">
          <li className="nav__item"><Link to="/">about me</Link></li>
          <li className="nav__item"><Link to="/portfolio">portfolio</Link></li>
          <li className="nav__item logo"><div className="logo_badge"><Link to="/slider">ya</Link></div></li>
          <li className="nav__item"><Link to="/blog">my blog</Link></li>
          <li className="nav__item"><Link to="/contact">contact me</Link></li>
      </ul>

  )
}

export default Nav;