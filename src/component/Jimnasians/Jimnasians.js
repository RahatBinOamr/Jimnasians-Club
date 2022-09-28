import React, { useEffect, useState } from 'react';
import Jimnasian from '../Jimnasian/Jimnasian';
import './Jimnasians.css'
const Jimnasians = () => {
    const [jimnasians,setJimnasians]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setJimnasians(data))
    },[])
    return (
        <div className='jimnasians-container'>
         <div> 
           
        <Jimnasian jimnasians={jimnasians} ></Jimnasian>
        </div>
         <div> store house</div>
            
        </div>
    );
};

export default Jimnasians;