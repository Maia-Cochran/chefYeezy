import React from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import FavoriteQuoteCard from '../FavoriteQuoteCard/FavoriteQuoteCard'
import './FavoriteQuotesPage.css';

//NOTES 
//THINKING FAVS WILL WORK SIMILAR TO IDEA BOX???
//USE ROUTER TO SWITCH BETWEEN VIEWS, BUT RENDER THE
//"NEW CARDS" LIKE I WOULD IN AN IDEA BOX
//UNSURE OF HOW TO ACHIEVE WITH THE TWO APIS

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