import React from 'react';
import './Main.css';
import myImage from '../SVG/ME1.svg';
import mainGra from '../SVG/maingr.svg';

function Main () {
    return (
        <div className="main__container">
     
             <div className="intro__box">
               안녕하세요 <p />
              디자인과 영상 제작에 관심이 많은
                 <p/>개발자 김예림 입니다.<p/>
                 <p/>
                 <img src={myImage} alt="me1" className="myImage"/>
            </div> 
            <div className="gra">
            <img src= {mainGra} alt="maingr" className="mainGr" />
            </div>
        </div>
    
    );
}

export default Main;