import React from 'react';
import './Textbox.css';
import Insta from'../SVG/Insta.svg';
import { Link } from 'react-router-dom';
import '../routes/Instagram.css';

function insta (){
return(
    <div className="contentsbox3">
        <img src={Insta} alt="Insta" className="instalogo" />
        <div className="instatext"> 
        <Link to = "/Instagram" >Click to see more</Link>
        </div>
    </div>
);
}

export default insta;