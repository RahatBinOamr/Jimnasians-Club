import React, { useEffect, useState } from 'react';
import Jimnasian from '../Jimnasian/Jimnasian';
import './Jimnasians.css'
const Jimnasians = () => {
    const [jimnasians,setJimnasians]=useState([]);
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch(`jimnasianData.json`)
        .then(res=>res.json())
        .then(data=>setJimnasians(data))
    },[])
    console.log(jimnasians);

        
const handelAddBtn=()=>{
    let time=0;
    for(const jimnasians of details){
        time = jimnasians.time+time;
        return;
    }
}
    return (
        <div className='jimnasians-container'>
         <div className='jimnasian'> 
           
           {
            jimnasians.map(jimnasians=><Jimnasian 
            key={jimnasians.id}
            details={details}
            setDetails={setDetails}
            jimnasians={jimnasians} ></Jimnasian> )
           }
       
        
        </div>
        <div className='store-container'> 
            <div>
                <h6>MD Rahat <small>rahatbinomar@gmail.com</small></h6>
                <div>
                    <div className='qualification'>
                    <h5>70 <small>Width</small></h5>
                    <h5>5.6 <small>Height</small></h5>
                    <h5>20y <small>age</small></h5>
                    </div>
                </div>
                <h1>Add to break</h1>
                <div className='break'>
                    <p><small>30</small></p>
                    <p><small>40</small></p>
                    <p><small>50</small></p>
                    <p><small>20</small></p>
                </div>
                <h1> Excersice Details </h1>
                <div>
                    <p className='excersice'> Excersice Time: </p>
                    <p className='break-time'> break time Time: </p>
                </div>
            </div>

        </div>
        
        
            
        </div>
    );
};

export default Jimnasians;