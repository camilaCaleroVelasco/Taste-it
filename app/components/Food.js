'use client';
import './Food.css';
import React from 'react';


const Food = (props) => {
    return (   
        <div className='container'>
            <div className='card'>
                <li key={props.id} className="food-item">
                    <img src={props.img} className="food-img" alt={props.name} />
                    <div className="food-info">
                        <h2>{props.name}</h2>
                        <h4>{props.text}</h4>
                    </div>
                </li>
            </div>
        </div>
        
        )
}

export default Food;
