import React from 'react';
import './FavoriteQuoteCard.css';

const FavoriteQuoteCard = ({ id, kanyeQ, chefQ }) => {
    return (
        <div className='favorite-quote'>
            <p>Kanye Said: <i>"{kanyeQ}"</i></p>
            <p> - - - - - - - - - - </p>
            <p>Chef Translation: <i>"{chefQ}"</i></p>
        </div>
    )
}

export default FavoriteQuoteCard;