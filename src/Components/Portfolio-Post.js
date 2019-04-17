import React, { Component } from 'react';
import '../App.css';
import arrayImages from './Albums/Album-Images';
import arrayBirds from './Albums/Album-Birds';
import arrayCities from './Albums/Album-Cities';
import arrayNature from './Albums/Album-Nature';
import arraySky from './Albums/Album-Sky';
import arrayAustralia from './Albums/Album-Australia';
import arrayGermany from './Albums/Album-Germany';
import ImageGallery from 'react-image-gallery'

let albumMap = arrayBirds;
let favoriteImageJSON = [];




class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: albumMap,
      posted: false,
      liked: false,
      cart: false
    };
  }

  checkNewAlbum() {
    if (localStorage.getItem("albumSelection") === "Birds") {
      albumMap = arrayBirds;
    }
    else if (localStorage.getItem("albumSelection") === "Cities") {
      albumMap = arrayCities;
    }
    else if (localStorage.getItem("albumSelection") === "Nature") {
      albumMap = arrayNature;
    }
    else if (localStorage.getItem("albumSelection") === "Sky") {
      albumMap = arraySky;
    }
    else if (localStorage.getItem("albumSelection") === "Australia") {
      albumMap = arrayAustralia;
    }
    else if (localStorage.getItem("albumSelection") === "Germany") {
      albumMap = arrayGermany;
    }
    this.setState({
      album: albumMap
    })
  }

  addToFavorites(favorite) {

    // Refs would not allow changes to svg element after render.
    // getElementById sometimes returns null. Try/Catch added to prevent crashing windowload error.
    try {
      document.getElementById(favorite + "5").childNodes[0].style.color = "green";
    }
    catch(err) {
      return;
    }

    for (let i=0;i<arrayImages.length;i++) {
      for (let j=0;j<12;j++) {
        if (arrayImages[i].images[j].title.includes(favorite)) {
          favoriteImageJSON.push(arrayImages[i].images[j])
          break;
        }
      }
    }
    console.log(favoriteImageJSON);
    localStorage.setItem("favoriteImages", JSON.stringify(favoriteImageJSON));
  }


  componentDidMount() {
    if (typeof localStorage.favoriteImages !== "undefined" && localStorage.favoriteImages.length > 0) {
      favoriteImageJSON = JSON.parse(localStorage.favoriteImages);
    }
    this.CheckAlbumSelection = setInterval(
      () => this.checkNewAlbum(), 16
    );
  }

  componentWillUnount() {
    clearInterval(this.CheckAlbumSelection);
  }

  render() {

    const imageItems = this.state.album.map((image) =>
    <div className="ImagePost">
      <Image imageUrl={image.url} id={image.id}/>
      <div className="description">
        <h2>{image.title}</h2>
        <div>{image.description}</div>
        <br />
        <div>${image.price}</div>
        <hr/>
        <div className="Tags" id={image.title}>
          <a onClick={(event) => this.addToFavorites(event.target.parentNode.parentNode.id)} id={image.title + "5"}><i className="fas fa-shopping-basket"></i></a>
          <a href="https://twitter.com/intent/tweet?text=Hey, check out this image by Tom!"><i className="fab fa-twitter"></i></a>
          <a href="mailto:tom@cruise.com?Subject=Hey%20Tom"><i className="far fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {imageItems}
    </div>
  );
}
}

class Image extends Component {
  render() {
    {/*https://www.npmjs.com/package/react-image-gallery-solancer*/}
    const images = [
      {
        original: this.props.imageUrl
      }
    ]

    return (
      <ImageGallery
        items={images}
        slideInterval={9000}
        showNav={false}
        showThumbnails={false}
        showPlayButton={false}
        autoPlay={false}/>
      );
    }
  }


  export default Post;
