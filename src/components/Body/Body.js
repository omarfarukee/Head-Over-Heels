import React, { useEffect, useState } from 'react';
import Tools from '../Tools/Tools';
import TimeCalculate from '../TimeCaculate/TimeCalculate';
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
                <TimeCalculate times = {times}></TimeCalculate>
            </div>
        </div>
    );
};

export default Body;