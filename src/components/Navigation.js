import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
      <div className="Navidesign">
        <Link to="/">Main</Link>
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Contect">Contect</Link>
      </div>
    )
  }

export default Navigation;