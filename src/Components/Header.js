import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Logo from '../Images/TCLogo.png'
import { Redirect } from 'react-router';
import Footer from './Footer.js';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  render() {

    // if Logo clicked
    if (this.state.redirect) {
      return (
        <div>
          <Header />
          <Redirect push to='/' />
        </div>
      );
    }

    return (
      <div className="Header">
        <div className="Logo">
          <img src={Logo} alt="TC" onClick={this.handleOnClick}/>
        </div>

        <div className="Links">
          <p><Link id="link" to='/'>Home</Link></p>
          <p><Link id="link" to='/Portfolio'>Portfolio</Link></p>
          <p><Link id="link" to='/About'>About</Link></p>
          <p><Link id="link" to='/Shop'>Shop</Link></p>
        </div>

      </div>
    );
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

}

export default Header;
