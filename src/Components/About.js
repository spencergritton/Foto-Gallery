import React, { Component } from 'react';
import '../App.css';
import myself from '../Images/myself.jpg'
import impossible from '../Images/impossible.jpg'
import snowboard from '../Images/snowboard.jpg'
import ImageGallery from 'react-image-gallery'
import Footer from './Footer.js'

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1> Do more than just exist: Create your life. </h1>
        <p>I am an actor and photographer based on Iowa City, Iowa. I'm currently working on Mission Impossible X, the greatest film franchise of history. I love to talk about my photography and expeirences!</p>
        <p>Over the past decade, through full time acting roles, I've has created content, marketed events, and worked on a lot of films. Because of the experience I have in front of the camera, I'm well adapted behind it. </p>
        <p>I'm a fan of good books and good beer with equal enthusiasm, and when I'm not slinging tweets you'll find me at the nearest Church of Scientology. I have a B.A. in theatre from Juilliard. </p>
        <div className="SlideShow">
          <Images />
        </div>

      </div>
    );
  }
}

class Images extends Component {
  render() {
    {/*https://www.npmjs.com/package/react-image-gallery-solancer*/}
    const images = [
      {
        original: impossible
      },
      {
        original: snowboard
      },
      {
        original: myself
      }
    ]

    return (
      <ImageGallery
        items={images}
        slideInterval={9000}
        showNav={false}
        showThumbnails={false}
        autoPlay={true}/>
    );
  }
}

export default About;
