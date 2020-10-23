import React from 'react';
import './Instagram.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import InstaMenu from '../SVG/InstaMenu.svg';
import InstaButton from '../SVG/InstaButton.svg';
import InstaPro from '../SVG/InstaPro.svg';

function Instacontents(){
  return(
    <div className="Instacontents">
      <h2 className="Instatitle">tack</h2>
       <div className="InstaCompo">
         <img src={InstaMenu} alt="Instamenu" / >
           <img src={InstaPro} alt="profile" className="InstaPro"/ >
           <div className="InstaImg">

           </div>
           <div className="InstaImgNav">

           </div>
           <h3 className="InstaDate">2020. 04. 26</h3>
          <img src={InstaButton} alt="button" / >
      </div>
  </div>
  );
}




function Instagram(){
  return (
    <div className="instaContainer">
       <Link to="/About" className="back">Back</Link>
        <Route path='/About' component={About} />
       <Instacontents / >
       <Instacontents / >
       <Instacontents / >
   
        </div>

  );
}



export default Instagram;