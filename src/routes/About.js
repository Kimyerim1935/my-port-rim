import React from 'react';
import './About.css';
import Myimg2 from '../SVG/ME2.svg';
import Textbox from '../components/Textbox';
import Textbox2 from '../components/Textbox2';
import  Insta from './Insta';
import Mbti from '../components/Mbti';

  

function About(){
    return <React.Fragment>

        <div className="about__container">
         <img src={Myimg2} alt="me2" className="me2" / >
             <div className="about01">
                <h2 className="title">Information</h2>
                 <Textbox / >
                 <h2 className="title2">Education</h2>
                <Textbox2 / >
            </div>
            
             <div className="about02">
             <h2 className="title">Interests</h2>
             <Insta / >
             <h2 className="title2">Propensity</h2>
             <Mbti/>
             </div>
        </div>

        </React.Fragment>
}

export default About;