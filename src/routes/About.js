import React from 'react';
import './About.css';
import Myimg2 from '../SVG/ME2.svg';
import Textbox from '../components/Textbox';
import Textbox2 from '../components/Textbox2';
import  Insta from './Insta';
import Mbti from '../components/Mbti';

function About01(){
    return(
        <div className="about01">
        <h2 className="title">Information</h2>
         <Textbox />
         <h2 className="title2">Education</h2>
        <Textbox2 />
    </div>
    );
}

function About02() {
    return(
        <div className="about02">
        <h2 className="title">Interests</h2>
        <Insta />
     
        <h2 className="title2">Propensity</h2>
        <Mbti/>
        </div>
    );
}

function About(){
    return (
        <div className="about__container">
         <img src={Myimg2} alt="me2" className="me2" />
           <About01 />
            <About02 />
          
        </div>
);
       
}

export default About;