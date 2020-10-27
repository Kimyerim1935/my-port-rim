import React, {useState}  from "react";
import './ImgSlider.css';

function ImgSlider() {
    let sliderArr = [1 , 2, 3, 4, 5, 6, 7, 8, 9];
    const [x,setX] = useState(0);
    const goLeft = () => {
        x=== 0 ? setX(-100 *  (sliderArr.length-1)) : setX(x + 100);
    };
    const goRight = () => {
        x=== -100 * (sliderArr.length - 1 ) ? setX(0) : setX(x - 100);
    };

    return ( 
        <div className="body">
            {sliderArr.map((item,index)=> {
                    return (
                        <div key={index} className="slide" style={{transform:'translateX(${x}%)'}}>
                            {item}
                           
                        </div>
                    );
                })}
                <button id="goLeft" onClick={goLeft} className="but-styles">left</button>
                <button id="goRight" onClick={goRight} className="but-styles">right</button>
        </div>
    );
}

export default ImgSlider;