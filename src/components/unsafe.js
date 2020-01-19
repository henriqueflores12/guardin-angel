import React, { Component } from "react";
import Router from "../router";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";
import Posts from "../containers/postContainer";

export default class unsafe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lng: ""
    };
  }
  showPosition = position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(this);
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  };

  render() {

    return (
      <div className="backunsafe">
        <h1>unsafe location post</h1>
        <div className="unsafeMap">
         
          <MapContainer lat={this.state.lat} lng={this.state.lng}/>
          <div className="newPost">
            <Posts showPosition={this.showPosition} />
          </div>
        </div>
      </div>
    );
  }
}
