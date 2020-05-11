import React, { Component } from "react";

import "../styles/navbar.css";
import PropTypes from "prop-types";
import { logoutCompany } from "../redux/actions/authAction";
import { logoutStudent } from "../redux/actions/authAction";
import { connect } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Navbar,
//   Nav,
//   Image,
//   FormControl
// } from "react-bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }
  componentWillMount() {}

  render() {
    var isActive =
      this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? "active" : "";
    var liClasses = `nav-link ${className}`;

    // if (this.props.authCompany || this.props.authStudent) {
    //   console.log("auth true");
    //   var auth = true;
    // }
    if (localStorage.getItem("student") || localStorage.getItem("company")) {
      console.log("auth true");
      var auth = true;
    }

    return !auth ? (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a
            className="navbar-brand"
            style={{ color: "#dc3545", fontWeight: "800", fontSize: "120%" }}
            href="/home"
          >
            Seizure Detection
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item">
                <a
                  className={liClasses}
                  href="/about"
                  style={{ fontWeight: "500" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={liClasses}
                  href="/architecture"
                  style={{ fontWeight: "500" }}
                >
                  Architecture
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={liClasses}
                  href="/user/login"
                  style={{ fontWeight: "500" }}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    ) : (
      <nav className="navbar  navbar-light bg-light">
        <div className="d-flex">
          <a
            className="navbar-brand"
            style={{
              color: "#dc3545",
              fontWeight: "800",
              fontSize: "120%"
            }}
            href="/user/home"
          >
            Seizure Detection
          </a>
        </div>
        <div className="d-flex">
          {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
          <ul className="navbar-nav mr-auto mt-2 mt-md-0 ">
          <li className="nav-item">
              <p
                className={liClasses}
                style={{ fontWeight: "500", color: "rgba(0,0,0,.5)" }}
              >
                Welcome <i>{localStorage.getItem("username")}</i>
              </p>
            </li>
            <li className="nav-item">
              <a
                className={liClasses}
                href="/user/address"
                style={{ fontWeight: "500" }}
              >
                Address
              </a>
            </li>

            <li className="nav-item">
              <a
                className={liClasses}
                href="/home"
                style={{ fontWeight: "500" }}
                onClick={() => {
                  localStorage.getItem("student")
                    ? this.props.logoutStudent()
                    : this.props.logoutCompany();
                }}
              >
                Logout
              </a>
            </li>
            
          </ul>
          {/* </div> */}
        </div>
      </nav>
    );
  }
}
Navbar.contextTypes = {
  router: PropTypes.object
};
const mapStateToProps = state => {
  // console.log(state);
  return {
    authStudent: state.auth.authStudent,
    authCompany: state.auth.authCompany
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logoutStudent: () => dispatch(logoutStudent()),
    logoutCompany: () => dispatch(logoutCompany())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
