'use client'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Hdr from '../components/Hdr'
import './page.css'
import '../Login/page'
import UserFoodList from './UserFoodList'
import axios from 'axios';




const ProfilePage = () => {

    const router = useRouter();
    const[isLoggedIn, setIsLoggedIn] = useState(true);
    const [username, setUsername] = useState('');
    const [userRecipes, setUserRecipes] = useState([]);



    const handleLogout = () => {
      setIsLoggedIn(false); // user gets logout
      router.push('/'); // go to home view
    }

    useEffect(() => { 
      fetchUsername();
      fetchRecipes();
  }, []);
  
    const fetchUsername = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/users');
        setUsername(response.data.username);
      } catch (error) {
          console.error('Error fetching username: ', error);
      }
    }

    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/recipes');
        console.log('Response:', response.data);
        if (Array.isArray(response.data)) {
          setUserRecipes(response.data);
        } else {
            console.error('Response data is not an array:', response.data);
        }
      } catch (error) {
          console.error('Error fetching recipes: ', error);
      } 
  }

  const [userfoods, setUserFoods] = useState([]);
  //change to start with the user array (i havent figured out how to make it so i cant add it here)

    return (
      <div className="profile"> 
           <Hdr isLoggedIn={isLoggedIn} handleLgout={handleLogout}/>
           <div  className="recipes"> 
              <h1 className="yourTitle">Your Recipes</h1>
              <UserFoodList items={userRecipes}/>
           </div>
           <div className="profilepic">
              <img className="womanpic" src='/images/woman-profile.jpeg' alt="WomanProfile"/>;
           </div>
           <div className='userInfo'>
              {/* <h3 className="username2"> Jane Doe</h3>
              <h4 className="years"> Since 2019 </h4> */}
              <h3 className="username2"> {localStorage.getItem('username')} </h3>
           </div>
      </div>
    );
  }
  
  
  export default ProfilePage;