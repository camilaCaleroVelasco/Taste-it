
'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Hdr from '../components/Hdr'
import './page.css'

const LoginPage = () => {

    const router = useRouter();
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        // For now the user can login without credentials
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/Profile') //change once we make the 'logged in user screen'
    }

    const handleLogout = () => {
        setIsLoggedIn(false); // user gets logout
        router.push('/'); // go to home view
    }

    return (
        <div>
            <Hdr isLoggedIn={isLoggedIn} handleLgout={handleLogout}/>
            <div className="login-card">
                <div className='LoginHeader'>
                    <h1 className='login'>Login</h1>
                </div>
                <br></br>
                
                <form onSubmit={submitHandler} className='form'>
                    <label className='username'>Username: </label>
                    <input type="text" className='text-username'/>
                    <br></br>
                    <br></br>
                    <label className='password'>Password: </label>
                    <input type="text" className='text-password'/>
                    <br></br>
                    <button type="submit" className='submit'>Log In</button>
                    <button type="submit" className='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
