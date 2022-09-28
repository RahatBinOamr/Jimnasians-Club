import React, { useEffect, useState } from 'react';
import Jimnasian from '../Jimnasian/Jimnasian';
import './Jimnasians.css'
const Jimnasians = () => {
    const [jimnasians,setJimnasians]=useState([]);
    useEffect(()=>{
        fetch(`jimnasianData.json`)
        .then(res=>res.json())
        .then(data=>setJimnasians(data))
    },[])
    console.log(jimnasians);

    return (
        <div className='jimnasians-container'>
         <div className='jimnasian'> 
           
           {
            jimnasians.map(jimnasians=><Jimnasian 
            key={jimnasians.id}
            jimnasians={jimnasians} ></Jimnasian> )
           }
       
        
        </div>
         <div> store house</div>
            
        </div>
    );
};

export default Jimnasians;