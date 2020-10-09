import React from 'react';
import './Textbox.css';

function TextBox (){
    return(
        <div className="contentsbox">

            <div className="leftbox">
                NAME <p/>
                BIRTH<p/>
                MOBILE<p/>
                E-MAIL<p/>
                ADDRESS<p/>
                CHINESS SODIAC<p/>
                CONSTELLATION
            </div>
            <div className="rightbox">
                KIM YE RIM<p/>
                1998. 04. 04<p/>
                010.2487.7815<p/>
                kimyerim1935@naver.com<p/>
                경기도 시흥시 은행로<p/>
                호랑이<p/>
                양
            </div>
        </div>
    );
}

export default TextBox;