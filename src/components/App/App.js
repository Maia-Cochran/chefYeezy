import React, { Component } from 'react';
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
      this.setState({kanyeQuotes: [...data]})
    })
  }
  render = () =>{
    return (
      <main className="App">
      </main>
    );
  };
};

export default App;
