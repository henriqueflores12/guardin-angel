import React, { Component } from "react";
import PropTypes from "prop-types";

export default class geolocation extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="geolocationbox">
          <h3>copy and post</h3>
        <p className="geotext">latitude</p>
        <div className="lat">{this.props.lat}</div>
        <div className="lng">{this.props.lng}</div>
        <p className="geotext2">longitude</p>
      </div>
    );
  }
}
