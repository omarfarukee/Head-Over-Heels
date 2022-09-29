import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQ, faA } from '@fortawesome/free-solid-svg-icons'
import ('./AnsQus.css')
const AnsQus = () => {
    return (
        <div >
            <div className='ans'>
                <h1>Few Regular Asking Qus-Ans</h1>
            </div>
        <div >
            <div className='qus'>
                <h3><FontAwesomeIcon icon= {faQ} /> := How does react work?</h3>
                <h4><FontAwesomeIcon icon= {faA} /> :=Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum perferendis necessitatibus quod repudiandae facere. Reprehenderit, est. Ullam, nam dolore? </h4>
            </div>
            <div className='qus'>
                <h3><FontAwesomeIcon icon= {faQ} />:= What is the difference between props and state?</h3>
                <h4><FontAwesomeIcon icon= {faA} /> :=Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum perferendis necessitatibus quod repudiandae facere. Reprehenderit, est. Ullam, nam dolore? </h4>
            </div>
            <div className='qus'>
                <h3><FontAwesomeIcon icon= {faQ} /> :=
What are the use of useEFfect execpt load data form API</h3>
                <h4><FontAwesomeIcon icon= {faA} /> :=Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum earum perferendis necessitatibus quod repudiandae facere. Reprehenderit, est. Ullam, nam dolore? </h4>
            </div>
    </div>
          

        </div>
    );
};

export default AnsQus;