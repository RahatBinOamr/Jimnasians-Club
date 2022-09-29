import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <div>
            <h3> How Does React Work </h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
            <div>
                <h3>Props Vs State</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
            </div>
            <div>
                <h3>What is React useEffect used for</h3>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            </div>
        </div>
    );
};

export default Question;