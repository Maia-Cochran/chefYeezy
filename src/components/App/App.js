import React, { Component } from 'react';
import { fetchKanyeData, fetchChefData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import ChefSpeakContainer from '../ChefSpeakContainer/ChefSpeakContainer';
import FavoriteQuotesPage from '../FavoriteQuotesPage/FavoriteQuotesPage';
import './App.css';
// import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state= {
      kanyeQuotes: '',
      chefSpeakTranslations: 'this is test',
      favoriteTranslations: [],
      count: 0
    }
    this.saveTranslation = this.saveTranslation.bind(this)
  };

  saveTranslation = (newFavorite) => {
    this.state.count++
    const favs = [{ id: this.state.count, kanyeQ: this.state.kanyeQuotes, chefQ: this.state.chefSpeakTranslations }]
    console.log('FAVS', favs)
    this.setState({favoriteTranslations: [...this.state.favoriteTranslations, favs]})
    console.log(this.state.favoriteTranslations)
  } 

  componentDidMount() {
    fetchKanyeData().then(data => {
      console.log('KANYE QUOTE', data.quote)
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
        {/* <Switch> */}
          {/* <Route exact path='/' render={ () => <KanyeQuoteForm quotes={this.state.kanyeQuotes}/> }/> */}
          {/* <Route exact path='/' render={ () =>  <ChefSpeakContainer /> }/> */}
          <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
          <button className="translate-button" onClick={() => this.chefSpeak()}>Translate! </button>
          <ChefSpeakContainer quotes={this.state.chefSpeakTranslations}/> 
          <button className='save-button' onClick={() => this.saveTranslation()}>Save-uh Zees Kwoot-ah!</button>
          {/* <FavoriteQuotesPage props={this.favTranslatedQuotes} /> */}
        {/* </Switch> */}
      </main>
    );
    ///DO I NEED A FAV QUOTE LIST -- additional component????
    ///Sick Trick idea box is a good reference for this, maybe??
    ///make a list for both of the states
  };
};

export default App;
