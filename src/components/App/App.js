import React, { Component } from 'react';
import { getAllData } from '../apiCalls';
import KanyeQuoteForm from '../KanyeQuoteForm/KanyeQuoteForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      kanyeQuotes: [],
    };
  };

  componentDidMount() {
    getAllData().then(data => {
      this.setState({kanyeQuotes: data[0].quote})
    })
  };

  render = () =>{
    return (
      <main className="App">
        {/* {this.state.kanyeQuotes} */}
        <KanyeQuoteForm viewQuote={this.state.kanyeQuotes}/>
      </main>
    );
  };
};

export default App;
