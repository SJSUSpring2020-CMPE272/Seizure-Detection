import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginUser from "./LoginUser";
import Navbar from "./Navbar";
import RegisterUser from "./RegisterUser";
import Home from "./Home";
import About from "./About"
import Architecture from "./Architecture"
import mainprofile from './mainprofile'

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
        <Route path="/user/home" component={mainprofile} />
      </div>
    );
  }
}
//Export The Main Component
export default Main;
