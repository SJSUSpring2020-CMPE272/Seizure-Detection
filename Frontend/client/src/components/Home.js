import React, { Component } from "react";
import "../styles/home.css";
import api_route from "./../app-config";

class Home extends Component {
  state = {};
  render() {
    localStorage.clear();
    return (
      <div>
        <img
          src={`${api_route.host}/seizure.jpg`}
          style={{ width: "100%", opacity: "0.7" }}
        />
        <div className="centered">
          <div className="block-style mt-5" align="center">
            The objective is to create a prototype that will enable safe driving
            of patients who have been suffering from drug resistant epilepsy and
            tonic seizures.{"\n"} This will be achieved by applying emergency
            brakes to the vehicle and sending alert messages to patients
            contacts when the patient is just about to have a seizure.
          </div>
          <div className="block-style mt-5" align="center">
            Join our community and ensure your safety
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
