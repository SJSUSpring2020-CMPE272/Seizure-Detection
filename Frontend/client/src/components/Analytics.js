import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import api_route from "../app-config";
import GoogleMapReact from "google-map-react";
import shouldPureComponentUpdate from 'react-pure-render/function';
import MyGreatPlaceWithHover from './my_great_place_with_hover.jsx';

import {K_SIZE} from './my_great_place_with_hover_styles.js';
const AnyReactComponent = ({ text }) => (
  <div>
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 15px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
       
      }}
    ></div>
    {text}
  </div>
);

const Plot = createPlotlyComponent(Plotly);
class Analytics extends Component {
  state = {};
  static defaultProps = {
    center: {
      lat: 37.350226,
      lng: -121.883911,
    },
    zoom: 13,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}

  };
  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("student")}`,
      },
    };
    axios
      .get(
        `${api_route.host}/user/pastseizure/count/${localStorage.getItem(
          "loginId"
        )}`,
        config
      )
      .then((res) => {
        console.log(res.data.data.seizureNumber);
        this.setState({ x: res.data.data.seizureNumber });
        this.setState({ y: res.data.data.seizureNumber });
      });
  }
  render() {
      
    return (
      <div className="container" align="center">
        <h3 className="my-4">Analytics Dashboard</h3>
        <div className="card" align="center">
          <div className="card-header" align="center">
            Seizures occured per weak
          </div>
          <div className="card-body">
            <figure>
              <Plot
                data={[
                  {
                    x: [1, 2, 3, 4],
                    y: [2, 4, this.state.y, 3],
                    type: "scattergl",
                    marker: { color: "red" },
                    name: "Seizures Per Weak",
                  },
                ]}
              />
              <figcaption align="center">
                Fig1. - Seizures Per Weak
              </figcaption>
            </figure>
          </div>{" "}
        </div>
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDDcPwALh103uGlDrdPVD2xcKmA7BY5Weo",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            hoverDistance={K_SIZE / 2}
          >
            <AnyReactComponent
              lat={37.350226}
              lng={-121.883911}
              text={'My Marker'}
            />
              <MyGreatPlaceWithHover lat={37.350226} lng={-121.883911} text={'A'} /* Kreyser Avrora */ />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Analytics;
