import React, { Component } from "react";
import "./More.css";
import Axios from "axios";

class More extends Component {
  state = {
    search: "hththth",

    btcprice: "",
    ltcprice: "",
    ethprice: "",
    xrpprice: "",

    bchprice: "",
    xlmprice: "",
    eosprice: "",

    adaprice: "",
    xmrprice: "",
    udstprice: "",
    trxprice: "",
  };

   // This is called when an instance of a component is being created and inserted into the DOM
   componentDidMount() {
    Axios.get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BCH,XLM,EOS,ADA,XMR,UDST,TRX&tsyms=USD"
      )
      .then(res => {
        this.setState({ btcprice: res.data.BTC.USD });
        this.setState({ ltcprice: res.data.LTC.USD });
        this.setState({ ethprice: res.data.ETH.USD });
        this.setState({ xrpprice: res.data.XRP.USD });
        this.setState({ bchprice: res.data.BCH.USD });
        this.setState({ xlmprice: res.data.XLM.USD });
        this.setState({ eosprice: res.data.EOS.USD });
        this.setState({ adaprice: res.data.ADA.USD });
        this.setState({ xmrprice: res.data.XMR.USD });
        this.setState({ udstprice: res.data.UDST.USD });
        this.setState({ trxprice: res.data.TRX.USD });
      })
      .catch(err => console.log(err));
   }

   searchFunc() {
        let value = document.getElementById("search").value;

        let items = document.getElementsByClassName("filter");
        for (let i = 0; i < items.length; i++) {
            let a = items[1].getElementsByClassName("filt-item")[0]
            if (a.innerHTML.indexOf(value) > -1) {

                items[i].style.display = ""
            }else{
                items[i].style.display = "none"
            }
            
            
        }
   }

  render() {
    return (
      <div className="container">
      <input type="text" name="coin_search" onKeyUp={this.searchFunc.bind(this)} id="search" placeholder="Search For A Coin..."/>
        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>BTC (BitCoin)</p></div>
                <div className="col s8"><p id="price-col">${this.state.btcprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>LTC (Litecoin)</p></div>
                <div className="col s8"><p id="price-col">${this.state.ltcprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>ETH (Ethereum)</p></div>
                <div className="col s8"><p id="price-col">${this.state.ethprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>XRP (Ripple)</p></div>
                <div className="col s8"><p id="price-col">${this.state.xrpprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>BCH (BitCoin Cash)</p></div>
                <div className="col s8"><p id="price-col">${this.state.bchprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>XLM (Stellar Lumens)</p></div>
                <div className="col s8"><p id="price-col">${this.state.xlmprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>EOS (EOS)</p></div>
                <div className="col s8"><p id="price-col">${this.state.eosprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>ADA (Cardano)</p></div>
                <div className="col s8"><p id="price-col">${this.state.adaprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>XMR (Monero)</p></div>
                <div className="col s8"><p id="price-col">${this.state.xmrprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>UDST (Tether)</p></div>
                <div className="col s8"><p id="price-col">${this.state.udstprice}</p></div>
            </div>
        </div>

        <div className="card grey my-card">
            <div className="row filter">
                <div className="col s4 filt-item"><p>TRX (Tron)</p></div>
                <div className="col s8"><p id="price-col">${this.state.trxprice}</p></div>
            </div>
        </div>
      </div>
    );
  }
}

export default More;
