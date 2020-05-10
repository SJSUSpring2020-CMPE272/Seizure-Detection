import React, { Component } from "react";
import "./../styles/about.css";
import api_route from "./../app-config";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={`${api_route.host}/seizure.jpg`}
          style={{ width: "100%", opacity: "0.7" }}
        />
        <div className="centered">
          <div className="block-style mt-5" align="center">
            About 1 % of the general population suffers from epilepsy which lead
            to constant seizures. Normally, under every other circumstance,
            patients only have challenges in motor skills during a seizure.{"\n"}{" "}
            Over the years, seizure prediction has garnered humongous interest
            and extensive research is being carried out on the same. Many
            outstanding studies have been successful in providing high
            performing mechanisms that either give direct or indirect warnings.
            {"\n"}However, to make It extremely fault tolerant with high
            sensitivity and minimum false prediction rate these models are
            generally tailor made for each patient individually.
          </div>
          <div className="block-style mt-5" align="center">
            In our approach we use convolutional neural networks to EEG datasets
            and create a model that gives generalized retrospective methods of
            prediction and detection.{"\n"} The model extracts feature by itself
            to classify the preictal and interictal segments. This method can be
            extended to new patients without having the need to specify features
            to be extracted.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
