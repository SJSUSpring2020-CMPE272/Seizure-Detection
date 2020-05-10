import React, { Component } from "react";
import "../styles/login.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginDonor } from "../redux/actions/authAction";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "./../lang/en";
import hin from "./../lang/hin";
import ch from "./../lang/ch";
import api_route from "../app-config";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("hin", hin);
counterpart.registerTranslations("ch", ch);

counterpart.setLocale("en");

const Link = props => {
  return (
    <Translate content={props.content} component="a" href="/user/register" />
  );
};

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      authFlag: false,
      errors: "",
      lang: "en"
    };
  }

  componentWillMount() {
    this.setState({
      authFlag: false
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      student: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.loginDonor(data);
  };
  render() {
    if (this.props.authStudent) {
      return <Redirect to="/user/home" />;
    }
    const link = <Link content="link" />;
    const placeholder1 = counterpart.translate("placeholder1");
    const placeholder2 = counterpart.translate("placeholder2");
    const login1 = counterpart.translate("login1");
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <div
              style={{
                backgroundColor: "#1569e0",
                color: "white",
                position: "relative",
                textAlign: "center",
                height: "550px"
              }}
            >
              {/* <img
                alt="Healing heart logo image"
                height="100"
                src={`${api_route.host}//donorbox.jpeg`}
              /> */}

              <div className="content">
                <Translate
                  content="h31"
                  component="h3"
                  style={{ paddingTop: "10%" }}
                />
                <Translate
                  content="h32"
                  component="h3"
                  style={{ paddingTop: "10%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-5" />
              <div className="col-4">
                <p
                  style={{ color: "red", marginTop: "5px", fontWeight: "bold" }}
                >
                  {this.props.autherror}
                </p>
                <Translate
                  content="h11"
                  component="h1"
                  style={{ marginBottom: "9px", fontWeight: "bold" }}
                />
                <Translate
                  content="h33"
                  component="h3"
                  style={{ fontWeight: "bold" }}
                />
                <Translate content="p1" component="p" />
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder={placeholder1}
                      type="email"
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder={placeholder2}
                      type="password"
                      pattern=".{8,}"
                      onChange={e => {
                        this.setState({ password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="submit"
                      id="mySubmit"
                      value={login1}
                      style={{
                        color: "white",
                        backgroundColor: "#1569e0",
                        border: "1px solid #1569e0"
                      }}
                    />
                  </div>
                </form>
                <Translate content="h61" component="h6" with={{ link }} />
                <br />
                <div
                  align="center "
                  style={{ fontSize: "13px", color: "blue", cursor: "pointer" }}
                >
                  <span
                    onClick={() => {
                      this.setState({ lang: "en" });
                      counterpart.setLocale("en");
                    }}
                  >
                    English
                  </span>
                  <span className="ml-3">|</span>
                  <span
                    className="ml-3"
                    onClick={() => {
                      this.setState({ lang: "hin" });
                      counterpart.setLocale("hin");
                    }}
                  >
                    हिन्दी
                  </span>
                  <span className="ml-3">|</span>
                  <span
                    className="ml-3"
                    onClick={() => {
                      this.setState({ lang: "ch" });
                      counterpart.setLocale("ch");
                    }}
                  >
                    中文
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    authStudent: state.auth.authStudent,
    autherror: state.auth.autherror
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginDonor: payload => dispatch(loginDonor(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginUser);
