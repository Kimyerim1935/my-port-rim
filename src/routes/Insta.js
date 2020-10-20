import React from 'react';
import '../components/Textbox.css';
import Instasvg from'../SVG/Insta.svg';
import { Link } from 'react-router-dom';


function Insta (){
    console.log('welcome_Insta');
    return(
         <div className="contentsbox3">
             <img src={Instasvg} alt="Instasvg" />
             <Link to={{pathname:'/Instagram', className:'instatext'}}> Click Here</Link>
        </div>   

    );
}


export default Insta;