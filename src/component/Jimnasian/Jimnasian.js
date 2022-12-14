import React from 'react';

import './Jimnasian.css'

const Jimnasian = ({ jimnasians,handelAddToBtn }) => {
    const { picture,name,age,time}=jimnasians;

    

    return (
        <div className='jimnasian-container'>
            <div className='jimnasian-cart-container'>
            <img src= {picture} alt="" />
            <h3>Name:{name} </h3>
            <p>Age: {age} </p>
            <p><small> Time: {time}s </small></p>
        <button onClick={()=>handelAddToBtn(jimnasians)} className='add-btn'>Add To list</button>
        </div>
        
        </div>
        
    );
    
};

export default Jimnasian;