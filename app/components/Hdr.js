import React from 'react';
import './Hdr.css';
import Link from 'next/link';

const Hdr = ({isLoggedIn, handleLgout}) => {
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
            {!isLoggedIn && (
            <li>
                <Link href="/Login">Login</Link>
            </li>
            )}
            
            {isLoggedIn && (
            <li>
                <Link href='/Create'>Create</Link>
            </li>
            )}
            {isLoggedIn && (
            <li>
                <Link href={'/'} onClick={handleLgout}>Logout</Link>
            </li>
            )}
            
            
        </ul>
     </div>
    </div>
  );
};

export default Hdr;
