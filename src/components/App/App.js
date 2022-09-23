import React, { Component } from 'react';
import { fetchKanyeData, fetchChefData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      kanyeQuotes: '',
      chefSpeakTranslations: ''
    };
  };

  componentDidMount() {
    fetchKanyeData().then(data => {
      console.log('DATA', data.quote)
      this.setState({kanyeQuotes: data.quote})
    })
    .catch(error => console.log(`API error: ${error.message}`))
  };

chefSpeak() {
  console.log("HIYA")
  fetchChefData(this.state.kanyeQuotes)
  .then(result => {
    console.log("RESULT CHEF YEEZY", result)
    this.setState({chefSpeakTranslations: result})
  })
}

  render = () =>{
    return (
      <main className="App">
        <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
        <button onClick={() => this.chefSpeak()}>Translate! </button>
      </main>
    );
  };
};

export default App;
