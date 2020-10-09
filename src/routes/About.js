import React from 'react';
import './About.css';
import Myimg2 from '../SVG/ME2.svg';
import Textbox from '../components/Textbox';

function About(){
    return (
        <div className="about__container">
         <img src={Myimg2} alt="me2" className="me2" / >
             <div className="about01">
             <Textbox / >
             </div>
         
        </div>

    );
}


export default About;