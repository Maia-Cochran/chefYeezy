import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import FavoriteQuoteCard from '../FavoriteQuoteCard/FavoriteQuoteCard'
import './FavoriteQuotesPage.css';

const FavoriteQuotesPage = ({favQuotes}) => {
    const allFavorites = favQuotes.map(fave => {
       console.log('MAPPED CARD', fave)
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
            This is where the fav quotes page will render!
            <TopNavBar />
            <p>{allFavorites}</p>
        </div>                
        )
    }

export default FavoriteQuotesPage;