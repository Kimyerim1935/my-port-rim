import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';



function Navigation() {
    return(
      <div className="nav">
          <div className="navlogo">
        <h3>hello i am logo</h3>
          </div>
            <div className="navmenu">
              <Link to="/">Main</Link>
              <Link to="/About">About</Link>
              <Link to="/Portfolio">Portfolio</Link>
              <Link to="/Contect">Contect</Link>
 
          </div>
        
      </div>
    )
  }


export default Navigation;