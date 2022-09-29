import React from 'react';
import ('./Tools.css')
const Tools = (props) => {
    console.log(props)
    const {strMeal,strMealThumb} = props.elements
    return (
        <div className='tools-container'>
            <div>
                <img src={strMealThumb} alt="" />
                <h3>{strMeal}</h3>
                <h2>time : 30s</h2>  
                <button className='btn-add'>Add to list</button>
        </div>

        </div>
    );
};

export default Tools;