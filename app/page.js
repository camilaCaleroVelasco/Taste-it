
'use client';
import FoodList from '../app/components/FoodList';
import Hdr from '../app/components/Hdr';
import './page.css';
import { useState } from 'react';


const App = () => {



  const DUMMY_RECIPES = [
    {
      id: '1',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505',
      name: 'Açaí Bowl',
      text: 'A sweet Brazilian snack food from Amazonas.'
      
    },
    {
      id: '2',
      img: 'https://www.wholesomeyum.com/wp-content/uploads/2017/03/wholesomeyum-Low-Carb-Keto-Pancakes-Recipe-21.jpg',
      name: 'Pancakes',
      text: 'Flat cake, preapred from a starch-batter.'
      
    },
    {
      id: '3',
      img: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg',
      name: 'Pasta',
      text: 'Unleavened dough of wheat flour mixed, from Italy. '
      
    },
    {
      id: '4',
      img: 'https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg',
      name: 'Salad',
      text: 'Mixed vegetables.'
      
    },
    {
      id: '5',
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg',
      name: 'Cherry Delight Dessert',
      text: 'Creamy cheesecake-like dessert.'
    }
  ];

  const[foods, setFoods] = useState(DUMMY_RECIPES);


  return (
    <div className="home"> 
         <Hdr />
         <h1 className="popularTitle">Popular Recipes</h1>
         
      
      <FoodList items={foods}/>
    </div>
  );
}


export default App;