import React, { Component } from "react";
import PropTypes from "prop-types";

export default class geolocation extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="geolocationbox">
          <h3 className="geotitle">click at the button "you are here" and get the geolocation lat and lng first
          then you can copy the numbers in red and paste and write your post after</h3>
        
        <p className="geotext">latitude</p>
        <div className="geoborder">
        <div className="lat">{this.props.lat}</div>
        <div className="lng">{this.props.lng}</div>
        </div>
        <p className="geotext2">longitude</p>
      </div>
    );
  }
}
