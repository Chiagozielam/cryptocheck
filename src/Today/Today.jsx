import React, { Component } from "react";
import "./Today.css";
import Axios from "axios";
import {Link} from 'react-router-dom';

class Today extends Component {
  state = {
    btcprice: "",
    ltcprice: "",
    ethprice: ""
  };

  // This is called when an instance of a component is being created and inserted into the DOM

  componentWillMount() {
    Axios.get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
    )
      .then(response => {
        // we're setting the latest prices in the state to the prices gotten from cryptocurrency
        this.setState({ btcprice: response.data.BTC.USD });
        this.setState({ ltcprice: response.data.LTC.USD });
        this.setState({ ethprice: response.data.ETH.USD });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="today--section container">
        <h2>Current Price</h2>
        <div className="columns today--section__box">
          <div className="column btc--section">
            <h5>${this.state.btcprice}</h5>
            <p>1 BTC</p>
          </div>
          <div className="column eth--section">
            <h5>${this.state.ethprice}</h5>
            <p>1 ETH</p>
          </div>
          <div className="column ltc--section">
            <h5>${this.state.ltcprice}</h5>
            <p>1 LTC</p>
          </div>
        </div>
        <Link to="/more">More >>> </Link>
      </div>
    );
  }
}
export default Today;
