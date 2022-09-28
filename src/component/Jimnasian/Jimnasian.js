import React from 'react';
import './Jimnasian.css'
const Jimnasian = ({jimnasians,details,setDetails}) => {
    const {id, picture,name,age,time}=jimnasians;

 
    return (
        <div className='jimnasian-container'>
            <div className='jimnasian-cart-container'>
            <img src= {picture} alt="" />
            <h3>Name:{name} </h3>
            <p>Age: {age} </p>
            <p><small> Time: {time}s </small></p>
        <button className='add-btn'>Add To list</button>
        </div>
        </div>
    );
};

export default Jimnasian;