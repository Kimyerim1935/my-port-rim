import React from 'react';
import './Textbox.css';

function AboutBox (){
    return(
        <div className="contentsbox">
            <h2 className="title">Information</h2>
            <div className="contentsbox1">
                <h2 className="Lefttext">NAME</h2>
                <h2 className="Lefttext">BIRTH</h2>
                <h2 className="Lefttext">MOBILE</h2>
                <h2 className="Lefttext">E-MAIL</h2>
                <h2 className="Lefttext">ADDRESS</h2>
                <h2 className="Lefttext">CHINESS SODIAC</h2>
                <h2 className="Lefttext">CONSTELLATION</h2>
            </div>
            <div className="contentsbox2">
                <h2 className="Righttext">김예림</h2>
            </div>
           
        </div>
    );
}

export default AboutBox;