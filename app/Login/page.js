
'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Hdr from '../components/Hdr'
import './page.css'

const LoginPage = () => {

    const router = useRouter();
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);


    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            if(login) {
                const res = await axios.post('/routes/api/users', {username, password});
                console.log(res.data);
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', 'true');
                router.push('/Profile') //change once we make the 'logged in user screen'
            }
            else {
                const res = await axios.post('/routes/api/users', {username, password});
                console.log(res.data);
                router.push('/Login');
            }
        
        } catch(err) {
            console.err("Error in signing in");
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
                    <button type="submit" className='submit' onClick={hangleToggle}>{login ? 'Switch to Sign Up' : 'Switch to Log In'}</button>
                </form>
                
                
            </div>
        </div>
    )
}

export default LoginPage
