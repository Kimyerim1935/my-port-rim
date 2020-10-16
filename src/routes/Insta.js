import React from 'react';
import '../components/Textbox.css';
import Instasvg from'../SVG/Insta.svg';
import { BrowserRouter ,  Route , Link } from 'react-router-dom'
import Instagram from './Instagram';
import About from './About';

function Insta (){
    return(
        <BrowserRouter>
         <div className="contentsbox3">
            <img src={Instasvg} alt="Instasvg" />
            <Link to="./Instagram" className="instatext" > Click to see more</Link>
            <Route exact path='/Instagram' component={Instagram} useHistory={About}/> 
        </div>
        </BrowserRouter>
         

      
    )
}


export default Insta;