import React, { Component } from "react";
import Today from "../Today/Today";
import History from "../History/History";
import { deflate } from "zlib";

class Landing extends Component {
  render() {
    return (
      <div>
        <Today />
        <History />
      </div>
    );
  }
}

export default Landing;
