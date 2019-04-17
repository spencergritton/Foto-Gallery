import React, { Component } from 'react';
import '../App.css';
import arrayImages from './Albums/Album-Images';

let randomNumber;

function showAlbum(albumTitle) {
  localStorage.setItem('albumSelection', albumTitle)
  setTimeout((function() {

  // Hide Albums
  document.getElementById("albums").style.display = "none";

  // Display Portfolio-Post.js
  let elements = document.getElementsByClassName("ImagePost");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display="flex";
  }
}), 50);
}

class Albums extends Component {

  componentWillMount() {
    randomNumber = Math.floor(Math.random() * 6)
  }

  render() {

    const albumItems = arrayImages.map((albums) =>
    <div className="albumPicture" id={albums.AlbumTitle}>
      <img alt="Album Image" onClick={(event) => showAlbum(event.target.parentNode.id)} src={albums.images[randomNumber].url}></img>
      <p onClick={(event) => showAlbum(event.target.parentNode.id)} className="AlbumText">{albums.AlbumTitle}</p>
    </div>
  );

  return (
    <div id="albums">
      {albumItems}
    </div>
  )
}
}

export default Albums;
