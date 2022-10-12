import React, { Component } from 'react';
import { fetchKanyeData, fetchChefData } from '../apiCalls';
import KanyeQuote from '../KanyeQuote/KanyeQuote';
import ChefSpeakQuote from '../ChefSpeakQuote/ChefSpeakQuote';
import FavoriteQuotesPage from '../FavoriteQuotesPage/FavoriteQuotesPage';
import Header from '../Header/Header'
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kanyeQuotes: '',
      chefSpeakTranslations: 'Click the traslate button to view translation!',
      favoriteTranslations: [],
    }
  };
  
  saveTranslation = (event) => {
    event.preventDefault();
    const favs = { id: Date.now(), kanyeQ: this.state.kanyeQuotes, chefQ: this.state.chefSpeakTranslations }
    if(!this.state.favoriteTranslations.some(item => item.kanyeQ === favs.kanyeQ)){
      this.setState({ favoriteTranslations: [...this.state.favoriteTranslations, favs] })
    }
  }

  getNewKanyeQuote() {
    fetchKanyeData().then(data => {
      this.setState({ kanyeQuotes: data.quote })
    })
      .catch(error => console.log(`API error: ${error.message}`))
    this.setState({ chefSpeakTranslations: '✨ Click-ah trans-a-late to zee-ah kuwote heer 👩‍🍳 🤌 ✨' })
  };

  componentDidMount() {
    fetchKanyeData().then(data => {
      this.setState({ kanyeQuotes: data.quote })
    })
      .catch(error => console.log(`API error: ${error.message}`))
  };

  chefSpeak() {
    fetchChefData(this.state.kanyeQuotes)
      .then(result => {
        this.setState({ chefSpeakTranslations: result.contents.translated })
      })
      .catch(error => console.log(`API error: ${error.message}`))
  }

  render = () => {
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <KanyeQuote quote={this.state.kanyeQuotes} />
            <div className='translate-and-new-quote-button-container'>
              <button className="new-quote-button" onClick={() => this.getNewKanyeQuote()}>Click for new quote!</button>
              <button className="translate-button" onClick={() => this.chefSpeak()}>Translate!</button>
            </div>
            <ChefSpeakQuote quote={this.state.chefSpeakTranslations} />
            <div className='save-and-view-faves-button-container'>
              <button className='save-button' onClick={(event) => this.saveTranslation(event)}>Save-uh Zees Kwoot-ah!</button>
              <Link to="/myFavoriteQuotes" className='link-to-my-favorites'>
                <button className='access-favorites-button'>Go To My Faves!</button>
              </Link>
            </div>
          </Route>
          <Route exact path='/myFavoriteQuotes'>
            <FavoriteQuotesPage favQuotes={this.state.favoriteTranslations} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  };
};

export default App;
