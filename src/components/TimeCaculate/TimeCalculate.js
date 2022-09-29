import React from 'react';
import img from '../../images/IMG_0192 (2).JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ('../Body/Body.css')
const TimeCalculate = (props) => {
    const {times} = props
    console.log(times)

    let addTime = 0;

    for(const timeTime of times){
        addTime = addTime + timeTime.time
        
    };

    const buttonOne = () => {
        const grandTime = document.getElementById('break-time')
        const breakTime = document.getElementById('time1')
        const breakTimeValue = breakTime.innerText
        const string1 = parseFloat(breakTimeValue)
        grandTime.innerText = string1;
        document.getElementById('btn1').style.backgroundColor = 'rgb(5, 172, 237)' ;
        document.getElementById('btn2').style.backgroundColor = 'white' ;
        document.getElementById('btn3').style.backgroundColor = 'white' ;
        document.getElementById('btn4').style.backgroundColor = 'white' ;
    }
    const buttonTow = () => {
        const grandTime2 = document.getElementById('break-time')
        const breakTime2 = document.getElementById('time2')
        const breakTimeValue2 = breakTime2.innerText
        const string2 = parseFloat(breakTimeValue2)
        grandTime2.innerText = string2;
        document.getElementById('btn1').style.backgroundColor = 'white'
        document.getElementById('btn2').style.backgroundColor = 'rgb(5, 172, 237)' ;
        document.getElementById('btn3').style.backgroundColor = 'white' ;
        document.getElementById('btn4').style.backgroundColor = 'white' ; 
        
    }
    const buttonThree = () => {
        const grandTime3 = document.getElementById('break-time')
        const breakTime3 = document.getElementById('time3')
        const breakTimeValue3 = breakTime3.innerText
        const string3 = parseFloat(breakTimeValue3)
        grandTime3.innerText = string3;
        document.getElementById('btn1').style.backgroundColor = 'white' 
        document.getElementById('btn2').style.backgroundColor = 'white' ;
        document.getElementById('btn3').style.backgroundColor = 'rgb(5, 172, 237)' ;
        document.getElementById('btn4').style.backgroundColor = 'white' ;
    }
    const buttonFour = () => {
        const grandTime4 = document.getElementById('break-time')
        const breakTime4 = document.getElementById('time4')
        const breakTimeValue4 = breakTime4.innerText
        const string4 = parseFloat(breakTimeValue4)
        grandTime4.innerText = string4;
        document.getElementById('btn1').style.backgroundColor = 'white' 
        document.getElementById('btn2').style.backgroundColor = 'white' ;
        document.getElementById('btn3').style.backgroundColor = 'white' ;
        document.getElementById('btn4').style.backgroundColor = 'rgb(5, 172, 237)' ;
    }

    return (
        <div>
             <div className='cart'>
                    <img src={img} alt="" />
                    <div className='cart-details'>
                        <h3>Omar Faruk</h3>
                        <p><FontAwesomeIcon icon={faLocationDot}/> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='about-me'>
                    <div>
                        <h2>65<small className='small'>kg</small></h2>
                        <p className='under'>Weight</p>
                    </div>
                    <div>
                        <h2>5.8<small className='small'>ft.</small></h2>
                        <p className='under'>Height</p>
                    </div>
                    <div>
                        <h2>21<small className='small'>yr.</small></h2>
                        <p className='under'>age</p>
                    </div>
                </div>
                <h2 className='break'>Break-time-add</h2>
                <div className='time-btn'>
                    <button id='btn1' onClick={buttonOne}><span id='time1'>45</span>s</button>
                    <button id='btn2' onClick={buttonTow}><span id='time2'>60</span>s</button>
                    <button id='btn3' onClick={buttonThree}><span id='time3'>75</span>s</button>
                    <button id='btn4' onClick={buttonFour}><span id='time4'>99</span>s</button>
                </div>
                <h3 className='break'>Exercise-information</h3>
                <div className='Exercise-Time'>
                    <h4>Exercise-Time</h4>
                    <p>{addTime}m</p>
                </div>
                <div className='Exercise-Time'>
                    <h4>Break-time</h4>
                    <p><span id='break-time'>00</span>s</p>
                </div>
                <button className='see-btn'>See activity</button>
        </div>
    );
};

export default TimeCalculate;