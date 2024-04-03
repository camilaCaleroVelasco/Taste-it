
'use client';
//import Hdr from '../app/components/Hdr';
import HomeView from '../app/components/HomeView';
import FoodList from '../app/components/FoodList';
import About from './components/About';
import { useState } from 'react';
import Link from 'next/link';
const App = () => {



  const DUMMY_EXPENSES = [
    {
      id: '1',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505',
      name: 'Açaí Bowl'
      
    },
    {
      id: '2',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtfrdpK-BA8K5uB7ImZR18gC7tlu0FAy6aRKVypokrg&s',
      name: 'Pancakes'
      
    },
    {
      id: '3',
      img: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg',
      name: 'Pasta'
      
    },
    {
      id: '4',
      img: 'https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg',
      name: 'Salad'
      
    }
  ];

  const[foods, setFoods] = useState(DUMMY_EXPENSES);

  return (
    <div className="home"> 
      <HomeView />
      
      
      <FoodList items={foods}/>
    </div>
  );
}


export default App;