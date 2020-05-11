import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import axios from "axios";
import createPlotlyComponent from "react-plotly.js/factory";
import api_route from "../app-config";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const Plot = createPlotlyComponent(Plotly);
class Analytics extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  componentDidMount() {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("student")}`
      }
    };
    axios
      .get(
        `${api_route.host}/user/pastseizure/count/${localStorage.getItem(
          "loginId"
        )}`,
        config
      )
      .then(res => {
        console.log(res.data.data.seizureNumber);
        this.setState({ x: res.data.data.seizureNumber });
        this.setState({ y: res.data.data.seizureNumber });
      });
    axios
      .get(
        `${api_route.host}/user/getcoord/${localStorage.getItem("loginId")}`,
        config
      )
      .then(response => {
        console.log(response.data);
      });
  }
  render() {
    const { google } = this.props;
    var points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
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
                    name: "Seizures Per Weak"
                  }
                ]}
              />
              <figcaption align="center">
                Fig1. - Seizures occured per weak
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="card" align="center">
          <div className="card-header" align="center">
            Location of Seizures
          </div>
          <div className="card-body" style={{ height: "100vh", width: "100%" }}>
            <Map
              google={this.props.google}
              //initialCenter={{
              //lat: 42.39,
              //lng: -72.52
              //}}
              //bounds={bounds}
              zoom={14}
            >
              {/* <Marker
          onClick={this.onMarkerClick}
          icon={{
            url: "/img/icon.svg",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
          name={"Current location"}
        /> */}
              <Marker
                onClick={this.onMarkerClick}
                title={"The marker`s title will appear as a tooltip."}
                name={"SOMA"}
                position={{ lat: 37.778519, lng: -122.40564 }}
              />
              <Marker
                onClick={this.onMarkerClick}
                name={"Dolores park"}
                position={{ lat: 37.759703, lng: -122.428093 }}
              />
              <Marker
                onClick={this.onMarkerClick}
                name={"Your position"}
                position={{ lat: 37.762391, lng: -122.439192 }}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

// export default Analytics;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDDcPwALh103uGlDrdPVD2xcKmA7BY5Weo"
})(Analytics);
