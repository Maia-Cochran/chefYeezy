import React, { Component }  from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import './FavoriteQuotesPage.css';

//NOTES 
//THINKING FAVS WILL WORK SIMILAR TO IDEA BOX???
//USE ROUTER TO SWITCH BETWEEN VIEWS, BUT RENDER THE
//"NEW CARDS" LIKE I WOULD IN AN IDEA BOX
//UNSURE OF HOW TO ACHIEVE WITH THE TWO APIS

class FavoriteQuotesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Date.now(),
            faveQuotes: [],
            // chefQuote: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    addFavorite = event => {
        event.preventDefault();
        const newFavorite = this.state
        this.props.addFavorite(newFavorite)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event
        })
    }

    render() {
        return (
            <form>
                <div className='fav-quotes'>
                    This is where the fav quotes page will render!
                    <TopNavBar />
                </div>

                <input
                type='text'
                name='faveQuotes'
                value={this.state.faveQuote && this.state.chefQuote}
                onChange={event => this.handleChange(event)}
                />
                
                <button onClick = {event => this.addFavorite(event)}>Send It!</button>
            </form>
        )
    }
}

export default FavoriteQuotesPage;