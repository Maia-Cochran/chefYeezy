import React, { Component } from 'react';
import { fetchKanyeData, fetchChefData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import ChefSpeakContainer from '../ChefSpeakContainer/ChefSpeakContainer';
import FavoriteQuotesPage from '../FavoriteQuotesPage/FavoriteQuotesPage';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state={
      kanyeQuotes: '',
      chefSpeakTranslations: [],
      favTranslatedQuotes: [],
    };
  };

  componentDidMount() {
    fetchKanyeData().then(data => {
      console.log('KANYE QUOTE', data.quote)
      this.setState({kanyeQuotes: data.quote})
    })
    .catch(error => console.log(`API error: ${error.message}`))
  };

  chefSpeak(){
    return fetchChefData(this.state.kanyeQuotes)
      .then(result => {
        console.log("RESULT CHEF YEEZY NO KEYS", result)
        this.setState({chefSpeakTranslations: result.contents.translated})
      })
      .catch(error => console.log(`API error: ${error.message}`))
  }
  
  // setState({kanyeQuote: whatever, chefQuote: whatever})
  // data : {}
//need to add spread opp for favoriting (like ideabox forms) to make home for them
//need to write method for favoriting
//build out chefSpeak component/rendering area
//build out favorites page

  render = () =>{
    return (
      <main className="App">
        {/* <Switch> */}
          {/* <Route exact path='/' render={ () => <KanyeQuoteForm quotes={this.state.kanyeQuotes}/> }/> */}
          {/* <Route exact path='/' render={ () =>  <ChefSpeakContainer /> }/> */}
          <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
          <button className="translate-button" onClick={() => this.chefSpeak()}>Translate! </button>
          <ChefSpeakContainer quotes={this.state.chefSpeakTranslations}/> 
          <FavoriteQuotesPage />
        {/* </Switch> */}
      </main>
    );
  };
};

export default App;
