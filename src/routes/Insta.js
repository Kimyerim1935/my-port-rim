import React from 'react';
import '../components/Textbox.css';
import Instasvg from'../SVG/Insta.svg';
import {  NavLink } from 'react-router-dom';

function Insta (){
    return(
         <div className="contentsbox3">
             <img src={Instasvg} alt="Instasvg" />
             <NavLink  exact to="/Instagram" className="instatext"> Click to see more</NavLink>
        </div>   

    );
}


export default Insta;