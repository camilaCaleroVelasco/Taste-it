'use client';
import './Food.css';
import React from 'react';


const Food = (props) => {
    return (   
        
            <li key={props.id} className="food-item">
                <img src={props.img} className="food-img" alt={props.name} />
                <div className="food-info">
                    <h2>{props.name}</h2>
                </div>
            </li>
        )
}

export default Food;
