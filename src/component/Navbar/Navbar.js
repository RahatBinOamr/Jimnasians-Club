import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='icon'>
            <FontAwesomeIcon icon={ faCheckSquare}></FontAwesomeIcon> 
          
           <p>Jimnasians Club</p>
                
            </div>
            <div className='nav-menu'>
                <a href="./home">Home</a>
                <a href= './'>Details</a>
                <a href="./about">About</a>
            </div>
        </div>
    );
};

export default Navbar;