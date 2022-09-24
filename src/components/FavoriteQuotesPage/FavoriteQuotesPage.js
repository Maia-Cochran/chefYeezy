import React, { Component }  from 'react';
import TopNavBar from '../TopNavBar/TopNavBar';
import './FavoriteQuotesPage.css';

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