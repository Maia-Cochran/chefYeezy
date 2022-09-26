import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import FavoriteQuoteCard from '../FavoriteQuoteCard/FavoriteQuoteCard';
import PropTypes from 'prop-types';
import './FavoriteQuotesPage.css';

const FavoriteQuotesPage = ({ favQuotes }) => {
    const allFavorites = favQuotes.map(fave => {
        return (
            <FavoriteQuoteCard
                id={fave.id}
                key={fave.id}
                kanyeQ={fave.kanyeQ}
                chefQ={fave.chefQ}
            />
        )
    })
    return (
        <div className='fav-quotes'>
            <TopNavBar />
            <div className='saved-translation-container'>
                {!allFavorites.length > 0 ? `Oh no! You have not saved any translations yet! 
                    Click 'Home' above to return to chefYeezy for his best chef speak. 😏` : allFavorites}
            </div>
        </div>
    )
}

export default FavoriteQuotesPage;

FavoriteQuotesPage.propTypes = {
    favQuotes: PropTypes.array,
    saveTranslation: PropTypes.func
};