import React, { Component } from "react";
import "./../styles/about.css";
import api_route from "./../app-config";

class Architecture extends Component {
  state = {};
  render() {
    return (
      <div align="center">
        <img
          src={`${api_route.host}/architecture.jpeg`}
          style={{ height: "100%" }}
        />
      </div>
    );
  }
}

export default Architecture;
