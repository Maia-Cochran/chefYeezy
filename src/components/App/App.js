import React, { Component } from 'react';
import { fetchKanyeData, fetchChefData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import ChefSpeakContainer from '../ChefSpeakContainer/ChefSpeakContainer';
import FavoriteQuotesPage from '../FavoriteQuotesPage/FavoriteQuotesPage';
import Header from '../Header/Header'
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state= {
      kanyeQuotes: '',
      chefSpeakTranslations: 'Click the traslate button to view translation!',
      favoriteTranslations: [],
    }
  };

  saveTranslation = (event) => {
    event.preventDefault();
    const favs = { id: Date.now(), kanyeQ: this.state.kanyeQuotes, chefQ: this.state.chefSpeakTranslations }
    console.log('FAVS', favs)
    this.setState({favoriteTranslations: [...this.state.favoriteTranslations, favs]})
    console.log(this.state.favoriteTranslations)
  } 

  getNewKanyeQuote() {
    fetchKanyeData().then(data => {
      this.setState({kanyeQuotes: data.quote})
    })
    .catch(error => console.log(`API error: ${error.message}`))
    this.setState({chefSpeakTranslations: '✨ Click-ah trans-a-late to zee-ah kuwote heer 👩‍🍳 🤌 ✨'})
  };
  
  componentDidMount() {
    fetchKanyeData().then(data => {
      this.setState({kanyeQuotes: data.quote})
    })
    .catch(error => console.log(`API error: ${error.message}`))
  };

  chefSpeak() {
    return fetchChefData(this.state.kanyeQuotes)
      .then(result => {
        console.log("RESULT CHEF YEEZY NO KEYS", result)
        this.setState({chefSpeakTranslations: result.contents.translated})
      })
      .catch(error => console.log(`API error: ${error.message}`))
  }
  
  render = () =>{
    return (
      <main className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
            <button className="new-quote-button" onClick={() => this.getNewKanyeQuote()}>Click for new quote!</button>
            <button className="translate-button" onClick={() => this.chefSpeak()}>Translate!</button>
            <ChefSpeakContainer quotes={this.state.chefSpeakTranslations}/>
            <button className='save-button' onClick={(event) => this.saveTranslation(event)}>Save-uh Zees Kwoot-ah!</button> 
          <Link to="/myFavoriteQuotes" className='link-to-my-favorites'>
            <p><button className='access-favorites-button'>Go To My Faves!</button></p>
          </Link>
          </Route>
          <Route exact path='/myFavoriteQuotes'>
            <FavoriteQuotesPage favQuotes={this.state.favoriteTranslations}/>
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  };
};

export default App;
