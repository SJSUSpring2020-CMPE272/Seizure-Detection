import React, { Component } from "react";
import "../styles/home.css";
class Home extends Component {
  state = {};
  render() {
    localStorage.clear();
    return (
      <div>
        <div className="background-style">
          <div align="center">
            <div className="block-style mt-5">
              Growing up in poverty, children face tough challenges: hunger and
              malnutrition, limited access to education and medical services.{" "}
              {"\n"}But with support from people like you, we can help children
              get the health care, education, life skills, job-readiness
              training and confidence they need to create lasting change in
              their lives and communities.{"\n"}
              {"\n"}Together, we can end poverty for good
            </div>
            <div className="block-style mt-5">
              Join our community with 1+ million people all over the world
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
