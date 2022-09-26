import React from 'react';
import './FavoriteQuoteCard.css';

const FavoriteQuoteCard = ({ id, kanyeQ, chefQ }) => {
    return (
        <div className='favorite-quote'>
            <div className='original-quote'>Kanye Said: <i>"{kanyeQ}"</i></div>
            <p> - - - - - - - - - - </p>
            <div className='translated-quote'>Chef Translation: <i>"{chefQ}"</i></div>
        </div>
    )
}

export default FavoriteQuoteCard;