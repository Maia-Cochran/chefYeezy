import React from 'react';
import './FavoriteQuoteCard.css';

const FavoriteQuoteCard = ({ id, kanyeQ, chefQ }) => {
    return (
        <div className='favorite-quote'>
            <p>{kanyeQ}</p>
            <p> - - - - - - - - - - </p>
            <p>{chefQ}</p>
        </div>
    )
}

export default FavoriteQuoteCard;