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
    this.state={
      kanyeQuotes: '',
      chefSpeakTranslations: [],
      favTranslatedQuotes: [],
    }
    this.saveTranslation = this.saveTranslation.bind(this)
  };

  saveTranslation = (newFavorite) => {
    const favs = this.setState({faveTranslatedQuotes: 
      [...{chefQuote: this.state.chefSpeakTranslations, kanyeQuote: this.state.kanyeQuotes}, newFavorite]
    })
    console.log('FAVS', favs)
    return favs
  } 

  //need to build an object that includes both the chef quotes 
  //and the kanye quotes... using the quote id of each????
  //then deconstruct within the fave quotes page for posting 
  
  // setState({kanyeQuote: whatever, chefQuote: whatever})
  // data : {}
  //need to add spread opp for favoriting (like ideabox forms) to make home for them
  //need to write method for favoriting

  //build out favorites page

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
          <FavoriteQuotesPage props={this.favTranslatedQuotes} />
        {/* </Switch> */}
      </main>
    );
    ///DO I NEED A FAV QUOTE LIST -- additional component????
    ///Sick Trick idea box is a good reference for this, maybe??
    ///make a list for both of the states
  };
};

export default App;
