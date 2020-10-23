import React from 'react';
import './Instagram.css';
import { Route, Link } from 'react-router-dom';
import About from './About';

function Instagram(){
  return (
    <div className="instaContainer">

       <Link to="/About" className="back">Back</Link>
        <Route path='/About' component={About} />

        <div className="Instacontents">

          <h2 className="Instatitle">Take a Picture</h2>
        </div>

        <div className="Instacontents">
         <h2 className="Instatitle">Eat Dessert</h2>
        </div>
       
        <div className="Instacontents">
         <h2 className="Instatitle"> Exhibition </h2>
        </div>
       
    </div>
  );
}



export default Instagram;