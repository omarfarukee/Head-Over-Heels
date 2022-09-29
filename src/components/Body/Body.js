import React, { useEffect, useState } from 'react';
import Tools from '../Tools/Tools';
import ('./Body.css')
const Body = () => {
    const [element, setElement] = useState([]);

    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => { setElement(data.meals)})
    }, [])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className='body-data'>
            <div className='body-data-size'>
                <div>
                    <h2>Select your today's exercise</h2>
                </div>
                <div className='elements-grid'>
                 {
                    element.map(elements => <Tools
                    elements= {elements}
                    ></Tools>)
                }
                </div>

            </div>
            <div className='activity-container'>
                <h2>my activity</h2>
            </div>
        </div>
    );
};

export default Body;