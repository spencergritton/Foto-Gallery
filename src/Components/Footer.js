import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    if (document.location.pathname === "/") {
      return (
        <div className="Footer">
          <div className="NamePosition">
            Tom Cruise <br/> Photographer
          </div>
          <div className="Address">
            Iowa City, IA <br /> 52242
          </div>
          <div className="PhoneEmail">
            tomcruise@me.com <br /> 123-456-7891
          </div>
          <div className="SocialMedia">
            <a href="https://twitter.com/tomcruise" target="_blank"><i className="fab fa-2x fa-twitter twitter"></i></a>
            <a href="https://www.facebook.com/officialtomcruise/" target="_blank"><i className="fab fa-2x fa-facebook-f"></i></a>
            <a href="https://www.imdb.com/name/nm0000129/" target="_blank"><i className="fas fa-2x fa-user"></i></a>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="NoFooter"></div>
      );
    }
  }
}

export default Footer;
