import  './Navigate.css'
import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navigate = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
    <div className="header">
        <div className='hamburger' onClick={handleClick}>
            {click ?  (<FaTimes size={20} style={{color:'#fff', float:'right'}}/>) : (<FaBars size={20} style={{color:'#fff'}}/>)}
            
            
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}> 
        
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Project</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
       
    </div>
  )
}

export default Navigate