import React from 'react';
import './Main.css';
import me from '../SVG/ME1.svg';

function Main () {
    return (
        <div className="main__container">
     
             <div className="intro__box">
               안녕하세요 <p />
              디자인과 영상 제작에 관심이 많은
                 <p/>개발자 김예림 입니다.
                 <me / >
            </div> 
            <div className="gra">
                hello
            </div>
        </div>
    
    );
}

export default Main;