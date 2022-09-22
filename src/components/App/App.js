import React, { Component } from 'react';
import { getAllData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      kanyeQuotes: '',
    };
  };

  componentDidMount() {
    getAllData().then(data => {
      console.log('DATA', data)
      this.setState({kanyeQuotes: data})
    })
  };

  render = () =>{
    return (
      <main className="App">
        <KanyeQuoteForm quotes={this.state.kanyeQuotes}/>
      </main>
    );
  };
};

export default App;
