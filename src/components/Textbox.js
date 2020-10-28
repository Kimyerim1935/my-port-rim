import React from 'react';
import './Textbox.css';

function TextBox (){
    return(
        <div className="contentsbox">
            <div className="left">
                NAME <br/>
                BIRTH<br/>
                MOBILE<br/>
                E-MAIL<br/>
                ADDRESS<br/>
                CHINESS SODIAC<br/>
                CONSTELLATION
            </div>
            <div className="right">
                김예림 <br/>
                1998. 04. 04 <br/>
                010 2487 7815 <br/>
                kimyerim1935@naver.com <br />
                경기도 시흥시 은행로 <br/>
                호랑이 <br/>
                양 <br/>

            </div>
        </div>
    );
}

export default TextBox;