'use client';
import './UserFood.css';
import React from 'react';


const UserFood = (props) => {
    const { id, onEdit, onRemove } = props;
    return (   
        <div className='userContainer'>
            <div className='card'>
                <li key={props.id} className="userfood-item">
                    <img src={props.img} className="userfood-img" alt={props.name} />
                    <div className="userfood-info">
                        <h2>{props.name}</h2>
                        <h4>{props.text}</h4>
                        <div className="buttonContainer">
                            <button onClick={() => onEdit(id)}>Edit</button>
                            <button onClick={() => onRemove(id)}>Remove</button>
                        </div>
                    </div>
                </li>
            </div>
        </div>
        
        )
}

export default UserFood;