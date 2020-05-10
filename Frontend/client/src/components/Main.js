import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginUser from "./LoginUser";
import Navbar from "./Navbar";
import RegisterUser from "./RegisterUser";
import Home from "./Home";
import About from "./About"
import Architecture from "./Architecture"
import addAddress from './addAddress'
import Analytics from './Analytics'


class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/home" component={Home} />
        <Route path="/user/login" component={LoginUser} />
        <Route path="/user/register" component={RegisterUser} />
        <Route path="/about" component={About} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/user/address" component={addAddress} />
        <Route path="/user/home" component={Analytics} />
      </div>
    );
  }
}
//Export The Main Component
export default Main;
