'use client';
import React from "react";
import './HomeView.css';
import Hdr from "./Hdr";
import FoodList from "./FoodList";

const HomView = () => {
    return (
        <div className="home">
         <Hdr/>
         <h1 className="popularTitle">Popular Recipes</h1>
         <div className="food">
            
         </div>
        </div>
    )
}

export default HomView;