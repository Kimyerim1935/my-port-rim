import React from 'react';
import './Main.css';
import myImage from '../SVG/ME1.svg';
import mainGra from '../SVG/maingr.svg';

function Main () {
    return (
        <div className="main__container">
     
             <div className="intro__box">
               안녕하세요 <p />
              호기심 많고 도전 정신을 가진
                 <p/>개발자 김예림 입니다.<p/>
                 <p/>
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