import React from 'react';
import './Textbox.css';
import Insta from'../SVG/Insta.svg';
import { Route, Link } from 'react-router-dom';
import Instagram from '../routes/Instagram.js';

function insta (){
return(
    <div className="contentsbox3">
        <img src={Insta} alt="Insta" className="instalogo" />
        <div className="instatext"> 
        <Link to="../routes/Instagram" className="instatext"> Click to see more</Link>
        <Route path="../routes/Instagram" component={ Instagram } />
    
        </div>
    </div>
);
}

export default insta;