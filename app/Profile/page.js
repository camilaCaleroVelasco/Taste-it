'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Hdr from '../components/Hdr'
import './page.css'
import '../Login/page'


const ProfilePage = () => {



    const USER_RECIPES = [
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI--fVLjutQhCS9ioPEY9jdcweIw6K-bnBii3JyDJ6lg&s',
        name: 'Omelet',
        text: 'Eggs fried in olive oil, folded around delicious fillings.'
        
      },
      {
        id: '2',
        img: 'https://i.imgur.com/67Lp5fh.jpg',
        name: 'Pho',
        text: 'A popular Vietnamese soup dish with rice noodles.'
        
      },
      {
        id: '3',
        img: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/02/Banana-Bread-6.jpg',
        name: 'Banana Bread',
        text: 'Sweet bread made from mashed bananas, sometimes with nuts added. '
        
      },
      {
        id: '4',
        img: 'https://www.onceuponachef.com/images/2024/02/chipotle-chicken-quesadillas.jpg',
        name: 'Quesadillas',
        text: 'A Mexican dish of tortillas stuffed with fillings then cooked on a griddle or stove.'
        
      },
    ];
  
    const[foods, setFoods] = useState(USER_RECIPES);
  
    return (
      <div className="home"> 
           <Hdr />
           <h1 className="yourTitle">Your Recipes</h1>
           
        
        <FoodList items={foods}/>
      </div>
    );
  }
  
  
  export default ProfilePage;