import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class Analytics extends Component {
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
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDDcPwALh103uGlDrdPVD2xcKmA7BY5Weo"
})(Analytics);
