import React, { Component } from 'react';
import '../App.css';
import Post from './Portfolio-Post';
import Albums from './Portfolio-Albums';

class Main extends Component {

  render() {

    return (

      <div className="Portfolio">
        <h1>Portfolio</h1>
        <Albums />
        <Post />
      </div>
    );
  }
}

export default Main;
