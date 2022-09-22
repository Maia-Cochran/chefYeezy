import React, { Component } from 'react';
import { getAllData, postAllData } from '../apiCalls';
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
    getAllData().then(data => {
      // console.log('DATA', data[0])
      this.setState({kanyeQuotes: data})
    })
  };

  // componentDidUpdate(props) {
  //   getAllData(props).then(data => {
  //     this.setState({chefSpeakTranslations: data})
  //   })
  // }

  render = () =>{
    return (
      <main className="App">
        <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
      </main>
    );
  };
};

export default App;
