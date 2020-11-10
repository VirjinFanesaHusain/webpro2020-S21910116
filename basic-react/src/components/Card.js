import React from 'react';

const Card = ({ name, institution }) => {
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
        </div>
    );
};

export default Card;