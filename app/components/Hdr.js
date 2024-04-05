import React from 'react';
import './Hdr.css';
import Link from 'next/link';

const Hdr = () => {
  return (
    <div className="hdr">
     <div className='leftSide'>
        <img src='./images/logo.png'/>
     </div>
     <div className='rightSide'>
        <ul>
        
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/Login">Login</Link>
            </li>
            <li>
                <Link href="/About">About</Link>
            </li>
            
            
        </ul>
     </div>
    </div>
  );
};

export default Hdr;