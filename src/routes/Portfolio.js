import React from 'react';
import './Portfolio.css';
import Color from '../SVG/Color.svg';
import text from '../SVG/text.svg';
import Tree01 from '../SVG/Tree01.svg';
import Tree02 from '../SVG/Tree02.svg';
import Tree03 from '../SVG/Tree03.svg';
import Tree04 from '../SVG/Tree04.svg';

function Portfolio(){
    return(
        <div className="Container">
           
           <div className="leftbox">
               <h3 className="text">color</h3>
                <img src={Color} alt="color" / >
               <h3 className="text">font</h3>

               <h3 className="context">Karla</h3>
               <h3 className="context">ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
               <h3 className="context">abcdefghijklmnopqrsutvwxyz</h3>
               <h3 className="text">explain</h3>
               <img src={text} alt="text" / >
           </div>
           <div className="rightbox">
           <img src={Tree01} alt="Tree01"  className="tree"/ >
           <img src={Tree02} alt="Tree02" className="tree" / >
           <img src={Tree03} alt="Tree03" className="tree" / >
           <img src={Tree04} alt="Tree04" className="tree" / >
           </div>
        </div>
        
        );
}

export default Portfolio;