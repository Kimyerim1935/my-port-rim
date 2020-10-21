import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';



function Navigation() {
    return(
      <div className="nav">
          <div className="navlogo">
        <h3>hello i am logo</h3>
          </div>
            <div className="navmenu">
              <NavLink  exact to="/">Main</NavLink>
              <NavLink   to="/About">About</NavLink>
              <NavLink   to="/Portfolio" >Portfolio</NavLink>
              <NavLink   to="/Contect">Contect</NavLink>
 
          </div>
        
      </div>
    )
  }


export default Navigation;