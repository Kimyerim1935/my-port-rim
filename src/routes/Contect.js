import React from 'react';
import './Contect.css';
import Resume from '../SVG/Resume.svg';
import Intro1 from '../SVG/Intro.svg';

function Contect(){
    return (

    <div className="Contectbody">
         <div className="Contect__container1">
            <h2 className="contecttext">Resume</h2>
            <img src={ Resume } alt="resume" className="Resume" / >
        </div>
        <div className="Contect__container2">
            <h2 className="contecttext">Self-introduction</h2>
            <img src= {Intro1} alt="intro1" className="Intro1" / >
            
        </div>
    </div>
    );
}

export default Contect;