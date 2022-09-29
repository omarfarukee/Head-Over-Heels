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
                <h4><FontAwesomeIcon icon= {faA} /> :=Brought to existence by Jordan Walke and maintained by Facebook, React is the most widely used front-end JavaScript library in the web development domain. Some of the examples of commonly used JavaScript libraries are TensorFlow, Angular, Node etc. React takes a declarative approach to application development that makes it simple to reason about the program while simultaneously aiming for efficiency and flexibility. It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer. It creates basic views for each state in the project, and when the data changes, React updates and renders the appropriate component quickly. The declarative approach simplifies debugging and makes the code more predictable. 

Let’s have a look at an Instagram page built entirely with React to better understand how it works.  </h4>
            </div>
            <div className='qus'>
                <h3><FontAwesomeIcon icon= {faQ} />:= What is the difference between props and state?</h3>
                <h4><FontAwesomeIcon icon= {faA} /> :=The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. <br />Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </h4>
            </div>
            <div className='qus'>
                <h3><FontAwesomeIcon icon= {faQ} /> :=
What are the use of useEFfect execpt load data form API ?</h3>
                <h4><FontAwesomeIcon icon= {faA} /> := <br /> #Running once on mount: fetch API data <br />
          #Running on state change: validating input field <br />
          #Running on state change: live filtering <br />
          #Running on state change: trigger animation on new array value <br />
          #Running on props change: update paragraph list on fetched API data update <br />
          #Running on props change: updating fetched API data to get BTC updated price </h4>
            </div>
    </div>
          

        </div>
    );
};

export default AnsQus;