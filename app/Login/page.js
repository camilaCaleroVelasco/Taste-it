
'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Hdr from '../components/Hdr'
import './page.css'
const axios = require('axios');



const LoginPage = () => {

    const router = useRouter();
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    const submitHandler = async (event) => {
        event.preventDefault();
        
        try {
            let response;
            if(login) {
                // If login, send a login request
                const loginResponse = await axios.post('http://localhost:8082/api/users/login', {
                username: username,
                password: password,
                });
                console.log(loginResponse.data);
                if (loginResponse.data.isLoggedIn) {
                    setIsLoggedIn(true);
                    localStorage.setItem('isLoggedIn', 'true');
                    router.push('/Profile');
                }
            }
            else {
                // If signup, send a signup request
                const signupResponse = await axios.post('http://localhost:8082/api/users/signup', {
                username: username,
                password: password,
                });
                
                console.log(signupResponse.data);
                if (signupResponse.data.isLoggedIn) {
                    setIsLoggedIn(true);
                    localStorage.setItem('isLoggedIn', 'true');
                    router.push('/Login');
                }
            }
            
        } catch(err) {
            console.log("Error in signing in: " + err);
            if (err.response && err.response.status === 400) {
                // If the server responds with status code 400
                alert('Error: Username or password does not exist.');
            } else {
                // For other errors, show a generic error message
                alert('Error: An error occurred. Please try again later.');
            }
        }
        
    }

    const handleLogout = () => {
        setIsLoggedIn(false); // user gets logout
        localStorage.removeItem('isLoggedIn');
        router.push('/'); // go to home view
    }

    const hangleToggle = () => {
        setLogin(!login);
    }
    return (
        <div>
            <Hdr isLoggedIn={isLoggedIn} handleLgout={handleLogout}/>
            <div className="login-card">
                <div className='LoginHeader'>
                <h1 className='login'>{login ? 'Login' : 'Sign Up'}</h1>
                </div>
                <br></br>
                
                <form onSubmit={submitHandler} className='form'>
                    <label className='username'>Username: </label>
                    <input 
                        type="text" 
                        className='text-username' 
                        placeholder='Username' 
                        value={username} 
                        onChange={(event)=> setUsername(event.target.value)}/>
                    <br></br>
                    <br></br>
                    <label className='password'>Password: </label>
                    <input 
                        type="password" 
                        className='text-password' 
                        placeholder='Password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
                    <br></br>
                    <button type="submit" className='submit'>{login ? 'Log In':'Sign Up'}</button>
                    <button type="button" className='submit' onClick={hangleToggle}>{login ? 'Switch to Sign Up' : 'Switch to Log In'}</button>
                </form>
                
                
            </div>
        </div>
    )
}

export default LoginPage
