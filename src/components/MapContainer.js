import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, Circle } from "google-maps-react";
export class MapContainer extends Component {
  render() {
    console.log(this.props, "props.mapcontainer");
    console.log(Circle, "circle");
    if (this.props.lat) {
      console.log("if state", this.props.lat);
      return (
        <Map
          className="Map"
          google={this.props.google}
          zoom={15}
          center={{
            lat: this.props.lat,
            lng: this.props.lng
          }}
        >
          {/* <Circle center={{lat: this.props.lat, lng: this.props.lng}} radius={0.5} strokeColor="#0000FF" strokeOpacity={0.2} strokeWeight={1} fillColor="#0000FF" fillOpacity={0.1} visible={true} draggable={true}/> */}
          <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
        </Map>
      );
    } else {
      return (
        <Map className="Map" google={this.props.google} zoom={8}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      );
    }
  }
}
export default GoogleApiWrapper({
  apiKey:process.env.REACT_APP_GOOGLEMAPAPIKEY
})(MapContainer);
