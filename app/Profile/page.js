'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Hdr from '../components/Hdr'
import './page.css'
import '../Login/page'
import UserFoodList from './UserFoodList'


const ProfilePage = () => {

    const router = useRouter();
    const[isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
      setIsLoggedIn(false); // user gets logout
      router.push('/'); // go to home view
    }
    
  
    const[userfoods, setFoods] = useState([]);
    //change to start with the user array (i havent figured out how to make it so i cant add it here)
    
    return (
      <div className="profile"> 
           <Hdr isLoggedIn={isLoggedIn} handleLgout={handleLogout}/>
           <div  className="recipes"> 
              <h1 className="yourTitle">Your Recipes</h1>
              <UserFoodList items={userfoods}/>
           </div>
           <div className="profilepic">
              <img className="womanpic" src='/images/woman-profile.jpeg' alt="WomanProfile"/>;
           </div>
           <div className='userInfo'>
              <h3 className="username2"> {localStorage.getItem('username')} </h3>
           </div>
      </div>
    );
  }
  
  
  export default ProfilePage;
