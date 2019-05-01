import React, { Component } from "react";
import "./App.css";
import Today from "./Today/Today";
import History from "./History/History";
import MainRouter from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App white-text">
        <div className="topheader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">CryptoCheck</span>
              </div>
              <div className="navbar-end">
                <a
                  className="navbar-item"
                  href="https://chiagozielam.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Portfolio
                </a>
              </div>
            </nav>
          </header>
        </div>

        <section className="results--section">
          <div className="container">
            <h1>
              CryptoCheck gives you a real-time platform to easily chech the
              price of Bitcoin and other Altcoins
            </h1>
          </div>
          <div className="results--section__inner">
            <MainRouter />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
