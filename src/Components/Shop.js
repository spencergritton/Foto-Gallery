import React, { Component } from 'react';
import '../App.css';
import ShopObject from './ShopObject.js'
import impossible from '../Images/impossible.jpg'
import snowboard from '../Images/snowboard.jpg'
import myself from '../Images/myself.jpg'

let price;

class Shop extends Component {

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    if (typeof localStorage.favoriteImages !== "undefined" && localStorage.favoriteImages.length > 0) {

      this.state = {
        favorites: JSON.parse(localStorage.favoriteImages),
        inputValue: "",
        taxValue: "",
        totalPrice: "",
        key: "",
        test: 1,
        width: window.width,
        height: window.height
      };
    }
    else {
      this.state = {
        favorites: "",
        inputValue: "",
        taxValue: "",
        totalPrice: "",
        key: "",
        test: 1,
        width: window.width,
        height: window.height
      };
    }
  }

  handleChange = (e) => {
    this.setState({
      taxValue: "",
      inputValue: e.target.value
    })
  }

  return = () => {
    document.getElementById("ReturnPolicy").style.display = "flex";
    setTimeout(() => {
      document.getElementById("ReturnPolicy").style.display = "none";
    }, 5000);
  }

  onSubmit = () => {
    let roundedNumber;
    let number = price * 0.07;
    if (this.state.inputValue !== "" && this.state.inputValue.length === 5) {
      if (this.state.inputValue.startsWith("99") || this.state.inputValue.startsWith("00") || this.state.inputValue.startsWith("96")) {
        roundedNumber = 10 + Math.round(number * 10) / 10;
      }
      else {
        roundedNumber = Math.round(number * 10) / 10;
      }
      this.setState({
        taxValue: roundedNumber
      });
    }
  }

  getPrice() {
    price = 0;
    if (typeof localStorage.favoriteImages !== "undefined" && localStorage.favoriteImages.length > 0) {
      for (let i=0;i<this.state.favorites.length;i++) {
        price += this.state.favorites[i].price;
      }
      this.setState({
        favorites: JSON.parse(localStorage.favoriteImages),
        totalPrice: price,
      });
    }
    if (typeof localStorage.favoriteImages !== "undefined") {
      this.setState({
        favorites: JSON.parse(localStorage.favoriteImages),
        totalPrice: price,
      });
    }
    else {
      this.setState({
        totalPrice: price,
      });
    }
  }

  componentWillMount() {
    for (let i=0;i<this.state.favorites.length;i++) {
      price += this.state.favorites[i].price;
    }
  }

  componentDidMount() {
    this.CheckPrice = setInterval(
      () => this.getPrice(), 16
    );
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {

    return (
      <div className="Shop">
        <table className="LeftSide" cellSpacing="0">
          <ShopObject width={this.state.width}/>
        </table>

        <div className="RightSide">
          <p>NEED HELP?</p>
          <p>1 (800)-282-1374</p>
          <p>Monday-Friday 9-5PM CST</p>
          <button onClick={() => this.return()} className="ButtonTransition">RETURN POLICY</button>
          <div id="ReturnPolicy">No refunds.</div>
          <br />
          <h3>ESTIMATE TAX</h3>
          <hr />
          <h4>ZIP CODE</h4>
          <input name="zipcode" maxLength="5" type="text" value={this.state.inputValue} onChange={e => this.handleChange(e)}/>
          <button className="ButtonTransition" onClick={() => this.onSubmit()}>ESTIMATE TAX</button>
          {(this.state.inputValue == "") ? <h4 style={{color:"white"}}>Input blank</h4> : (this.state.taxValue > 1.21) ? <h4>${this.state.taxValue}0</h4> : <h4 style={{color:"white"}}>Input blank</h4>}
          <p>A $10 surcharge applies to orders in Hawaii, Alaska, and Puerto Rico.</p>
          <h3>CART TOTAL</h3>
          <hr />
          <h4 key={this.state.key}>${this.state.totalPrice + this.state.taxValue}</h4>
          <div id="NoItemsMessage">All items in cart are sold out. Add an in-stock item to checkout.</div>
          <button className="ButtonTransition">CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default Shop;
