import React from 'react';
import './About.css';
import Myimg2 from '../SVG/ME2.svg';

function About(){
    return (
        <div className="about__container">
          <img src={Myimg2} alt="me2" className="me2" / >
            <div className="about01">
                <div className="textbox">
                    <h2 className="title">Information</h2>
                </div>   
         </div>
        </div>

    );
}


export default About;