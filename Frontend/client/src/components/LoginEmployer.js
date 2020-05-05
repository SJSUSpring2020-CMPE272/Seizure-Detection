import React, { Component } from "react";
import "../styles/login.css";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {loginCompany} from '../redux/actions/authAction'

class LoginEmployer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      authFlag: false,
      errors: ""
    };
  }
  componentWillMount() {
    this.setState({
      authFlag: false
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state.email,"nfnfdknfdkskd")
    const data = {
      company: {
      email:this.state.email,
      password:this.state.password
      }
      
    };
    this.props.loginCompany(data)
    // axios.defaults.withCredentials = true;

    // axios.post("http://localhost:3001/student/login", data).then(res=>{
    //       console.log("status code", res.status)
    //     if (res.status === 200) {
    //         this.setState({
    //           authFlag: true
    //         });
    //       }
    //       else{
    //           this.setState({
    //               authFlag:false
    //           })
    //           console.log("in else")
    //       }
        
    // })
    // .catch(errors => {
    //     console.log("in catch",errors.response.data);
    //     this.setState({ authFlag:false,
    //     errors:errors.response.data.errors.body
    //     });
       
    //   });
  };
  render() {
    if(this.props.authStudent) {
      return <Redirect to='/company/home' />
  }
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
              <a className="logo" href="/">
                <img
                  alt="Handshake logo image"
                  height="42"
                  src="https://d1sssn74k2rfxk.cloudfront.net/assets/logo-dc4406b950dd8ba10a81ab34703a2bca284e7c4ba46d7ec7656c83e052d0c6f3.svg"
                ></img>
              </a>
              <div className="content">
                <h3 style={{ paddingTop: "40%" }}>We can't help everyone </h3>
                <h3 style={{ paddingTop: "10%" }}>But everyone can help someone</h3>
               
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-5"></div>
              <div className="col-4">
              <p style={{ color: "red",marginTop:"5px",fontWeight:"bold" }}>{this.props.autherror}</p>
                <h1 style={{ marginBottom: "9px", fontWeight: "bold" }}>
                  Sign in
                </h1>
                <h3 style={{ fontWeight: "bold" }}>Organizations & NGOs</h3>
                <p>Please sign in with your email and password</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="email@example.edu"
                      type="email"
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
                      required
                    ></input>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="password"
                      type="password"
                      pattern=".{8,}"
                      onChange={e => {
                        this.setState({ password: e.target.value });
                      }}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="submit"
                      id="mySubmit"
                      value="Login"
                      style={{
                        color: "white",
                        backgroundColor: "#1569e0",
                        border: "1px solid #1569e0"
                      }}
                    ></input>
                  </div>
                </form>
                <h6>No account?<a href="/company/register"> Sign up here</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
      authStudent: state.auth.authCompany,
      autherror: state.auth.autherror
     // loginSeller: state.loginReducer.isAuthenticatedSeller
  }   
}
const mapDispatchToProps = dispatch => {
    return {
      loginCompany: payload => dispatch(loginCompany(payload))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginEmployer);

