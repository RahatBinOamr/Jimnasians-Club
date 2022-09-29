import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Jimnasian from '../Jimnasian/Jimnasian';

import './Jimnasians.css'
const Jimnasians = () => {
    const [jimnasians,setJimnasians]=useState([]);
    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
        fetch('jimnasianData.json')
        .then(res=>res.json())
        .then(data=>setJimnasians(data))
    },[])
    // console.log(jimnasians);

 const handelAddToBtn = (jimnasian)=>{
    console.log(jimnasian)
    const newCart = [...cart,jimnasian];
    setCart(newCart)
 }
 
    return (
        <div className='jimnasians-container'>
         <div className='jimnasian'> 
           
           {
            jimnasians.map(jimnasians=><Jimnasian 
            key={jimnasians.id}
            
            handelAddToBtn = {handelAddToBtn}
            
            jimnasians={jimnasians} ></Jimnasian> )
           }
       
        
        </div>
         <div className='store-container'> 
            <CartDetails 
            cart={cart}
            setCart={setCart}
            
            ></CartDetails>

         </div>
        
        
            
        </div>
    );
};

export default Jimnasians;