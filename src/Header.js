import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <i class="fas fa-angle-right"></i>

        <div className="SearchBar">
          <i class="fas fa-search"></i>
          <input type="text"></input>
        </div>

        <div className="UserInfo">
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    );
  }
}

export default Header;
