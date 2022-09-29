import React, { useState } from 'react';
import './CartDetails.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const CartDetails = ({cart }) => {
    const [numbers,setNumbers]=useState()
 

const notify = () => toast("Wow so easy!");


let total = 0;
for (const times of cart){
    total = total + parseInt(times.time)
}

    return (
        <div>
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
                   <input type="button" name="10" id="" value="10" onClick={(e)=>setNumbers(e.target.value)}/>
                   <input type="button" name="20" id="" value="20" onClick={(e)=>setNumbers(e.target.value)}/>
                   <input type="button" name="30" id="" value="30" onClick={(e)=>setNumbers(e.target.value)}/>
                   <input type="button" name="40" id="" value="40" onClick={(e)=>setNumbers(e.target.value)}/>
                    
                    
                </div>
                <h1> Excersice Details </h1>
                <div>
                    <p className='excersice'> Excersice Time:{total}s  </p>
                    <p className='break-time'> Break Time: {numbers}s  </p>
                </div>
                <div>
        <button className='extera' onClick={notify}>Excersice Complete</button>
        <ToastContainer />
      </div>
            </div>
        </div>
    );
};

export default CartDetails;