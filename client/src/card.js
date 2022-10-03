import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='container'>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
        </div>
    )
}

export default Card