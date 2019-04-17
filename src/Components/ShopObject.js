import React, { Component } from 'react';
import '../App.css';

let i = 0;
let changeSize = 580;

class ShopObject extends Component {

  constructor(props) {
    super(props);

    if (typeof localStorage.favoriteImages !== "undefined" && localStorage.favoriteImages.length > 0) {
      this.state = {
        key: "",
        favorites: JSON.parse(localStorage.favoriteImages)
      }
    }
    else {
      this.state = {
        key: "",
      }
    }
  }

  remove(favoriteImage) {
    for (let i=0;i<this.state.favorites.length;i++) {
      if (favoriteImage.title === this.state.favorites[i].title) {
        let newList = this.state.favorites;
        newList.splice(i, 1);
        localStorage.setItem("favoriteImages", JSON.stringify(newList));

        this.setState({
          key: Math.random(),
          favorites: JSON.parse(localStorage.favoriteImages),
        });
        break;
      }
    }
  }


  render() {
    let favoriteItems;
    if (typeof localStorage.favoriteImages !== "undefined" && localStorage.favoriteImages.length > 0) {

      favoriteItems = this.state.favorites.map((favorite) =>
      <tr className="ShopObject">
        <td>
          <div id="DeleteShopItem" onClick={(event) => this.remove(favorite)}>X</div>
          <p id="ShopObjectTitle">{favorite.title}</p>
          <div className="ImageContainer">
            {this.props.width > changeSize ? (<img className="ShopImage" src={favorite.url}/>) : (<img className="ShopImage" style={{width:"100px"}} src={favorite.url}/>)}
            <div className="TextBlock">Out of stock</div>
          </div>
        </td>
        {this.props.width>changeSize && <td stlye={{paddingLeft:"3%"}}>{favorite.description}</td>}
        <td>${favorite.price}</td>

        <hr />
      </tr>
    );
  }


  return (
    <div>
      <tr id="shopTableHeader">
        <th className="Border">PRODUCT</th>
        {this.props.width>changeSize && <th className="Border">DESCRIPTION</th>}
        <th className="Border">PRICE</th>
      </tr>
      <div key={this.state.key}>
        {favoriteItems}
      </div>
    </div>
  );
}
}

export default ShopObject;
