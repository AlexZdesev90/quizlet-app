import React from 'react';
import { Link,  } from 'react-router-dom';
import './../css/NavBar.css';

const Navbar = () => {
  return (
      <div className="nav__elements">
          <span><Link to="/">Create</Link></span>
          <span><Link to="choose">Choose</Link></span>
          <span><Link to="train">Train</Link></span>
          <span><Link to="statistic">Statitic</Link></span>
    </div>
  )
}

export default Navbar;
