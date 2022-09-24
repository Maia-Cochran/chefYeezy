import React, { Component }  from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import './FavoriteQuotesPage.css';

//NOTES 
//THINKING FAVS WILL WORK SIMILAR TO IDEA BOX???
//USE ROUTER TO SWITCH BETWEEN VIEWS, BUT RENDER THE
//"NEW CARDS" LIKE I WOULD IN AN IDEA BOX
//UNSURE OF HOW TO ACHIEVE WITH THE TWO APIS

const FavoriteQuotesPage = (props) => {
    // addFavorite = event => {
    //     event.preventDefault();
    //     const newFavorite = this.state
    //     this.props.addFavorite(newFavorite)
    // }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: event
    //     })
    // }

    render() {
        return (
                <div className='fav-quotes'>
                    This is where the fav quotes page will render!
                    <TopNavBar />
                </div>                
        )
    }
}

export default FavoriteQuotesPage;