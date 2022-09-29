import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import ('./Tools.css')
const Tools = (props) => {
    console.log(props)
    const {name, img} = props.elements
    return (
        <div className='tools-container'>
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h2>time : 30s</h2>  
                <button className='btn-add'>Add to list <FontAwesomeIcon icon={faFolderPlus} /> </button>
        </div>

        </div>
    );
};

export default Tools;