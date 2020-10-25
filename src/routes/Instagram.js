import React from 'react';
import './Instagram.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import InstaMenu from '../SVG/InstaMenu.svg';
import InstaButton from '../SVG/InstaButton.svg';
import InstaPro from '../SVG/InstaPro.svg';
import Heart from '../SVG/Heart.svg';
import Bookmark from '../SVG/Bookmark.svg';
import Hashtag1 from '../SVG/Hashtag1.svg';
import Hashtag2 from '../SVG/Hashtag2.svg';
import Hashtag3 from '../SVG/Hashtag3.svg';
import Carousel from '../components/Horizontal.js';


function Instacontents1(){
  return(
    <div className="Instacontents">
      <h2 className="Instatitle">Take a Picture</h2>
       <div className="InstaCompo">
         <img src={InstaMenu} alt="Instamenu" / >
           <img src={InstaPro} alt="profile" className="InstaPro"/ >
           <div className="InstaImg">
              <Carousel / >
           </div>
           <div className="InstaImgNav">
            <img src={Heart} alt="Heart" / >
            <img src={Bookmark} alt="Book" / >
           </div>
           <img src={Hashtag1} alt="hash1" className="Hash" / >
           <h3 className="InstaDate">2020. 04. 26</h3>
          <img src={InstaButton} alt="button" / >
      </div>
  </div>
  );
}

function Instacontents2(){
  return(
    <div className="Instacontents">
      <h2 className="Instatitle">Eat Dessert</h2>
       <div className="InstaCompo">
         <img src={InstaMenu} alt="Instamenu" / >
           <img src={InstaPro} alt="profile" className="InstaPro"/ >
           <div className="InstaImg">

           </div>
           <div className="InstaImgNav">
            <img src={Heart} alt="Heart" / >
            <img src={Bookmark} alt="Book" / >
           </div>
           <img src={Hashtag2} alt="hash2" className="Hash" / >
           <h3 className="InstaDate">2020. 04. 26</h3>
          <img src={InstaButton} alt="button" / >
      </div>
  </div>
  );
}

function Instacontents3(){
  return(
    <div className="Instacontents">
      <h2 className="Instatitle">Exhibition</h2>
       <div className="InstaCompo">
         <img src={InstaMenu} alt="Instamenu" / >
           <img src={InstaPro} alt="profile" className="InstaPro"/ >
           <div className="InstaImg">

           </div>
           <div className="InstaImgNav">
            <img src={Heart} alt="Heart" / >
            <img src={Bookmark} alt="Book" / >
           </div>
           <img src={Hashtag3} alt="hash3" className="Hash" / >
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
       <Instacontents1 / >
       <Instacontents2 / >
       <Instacontents3 / >
   
        </div>

  );
}



export default Instagram;