import React from 'react';
import './CartDetails.css'
const CartDetails = ({cart,setCart}) => {



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
                    <p><small>30</small></p>
                    <p><small>40</small></p>
                    <p><small>50</small></p>
                    <p><small>20</small></p>
                </div>
                <h1> Excersice Details </h1>
                <div>
                    <p className='excersice'> Excersice Time: {cart.length}  </p>
                    <p className='break-time'> Break  Time: </p>
                </div>
                <div>
                    <button className='extera'>Activity Component</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;