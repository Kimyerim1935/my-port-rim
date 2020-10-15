import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Textbox.css';
import Instasvg from'../SVG/Insta.svg';

function Insta (){
    return(
        <div className="contentsbox3">
            <img src={Instasvg} alt="Instasvg" />
            <Link to="/About/Instagram" className="instatext">Click to see more</Link>
        </div>
    )
}


export default Insta;