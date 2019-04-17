import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import './App.css';

class App extends Component {

constructor(props) {
  super(props)
}

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
