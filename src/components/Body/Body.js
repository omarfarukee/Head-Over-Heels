import React, { useEffect, useState } from 'react';
import Tools from '../Tools/Tools';
import img from '../../images/IMG_0192 (2).JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ('./Body.css')
const Body = () => {
    const [elements, setElement] = useState([]);
    const [times, setTimes] = useState([])
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setElement(data))
    }, [])

    const handleBtnCall = (elements) =>{
        const newTimes = [...times , elements]
        console.log(newTimes)
        setTimes(newTimes)
    }
    return (
        <div className='body-data'>
            <div className='body-data-size'>
                <div>
                    <h2>Select your today's exercise</h2>
                </div>
                <div className='elements-grid'>
                 {
                    elements.map(element => <Tools
                    key = {element.id}
                    element= {element}
                    handleBtnCall = {handleBtnCall}
                    ></Tools>)
                }
                </div>

            </div>
            <div className='activity-container'>
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
                    <button>45s</button>
                    <button>60s</button>
                    <button>75s</button>
                    <button>99s</button>
                </div>
                <h3 className='break'>Exercise-information</h3>
                <div className='Exercise-Time'>
                    <h4>Exercise-Time</h4>
                    <p>00s</p>
                </div>
                <div className='Exercise-Time'>
                    <h4>Break-time</h4>
                    <p>00s</p>
                </div>
                <button className='see-btn'>See activity</button>
            </div>
        </div>
    );
};

export default Body;