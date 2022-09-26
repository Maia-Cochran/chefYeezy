import React from 'react';
import PropTypes from 'prop-types';
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

FavoriteQuoteCard.propTypes = {
    FavoriteQuoteCard: PropTypes.shape({
      id: PropTypes.number,
      kanyeQ: PropTypes.string.isRequired,
      chefQ: PropTypes.string.isRequired,
    }).isRequired,
    saveTranslation: PropTypes.func.isRequired
  };