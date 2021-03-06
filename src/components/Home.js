import React from "react";
import "../App.css";
import MapContainer from "./MapContainer";
import NavBar from "./NavBar";
import Posts from "../containers/postContainer";
import Geolocation from "./geolocation";

class Home extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <h3>
            Keep your community safe with friends in a simple post or comments
          </h3>
          <div className="map">
            <button
              className="report"
              onClick={() => {
                fetch(
                  `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLEMAPAPIKEY}`
                ).then(res => {
                  console.log(res.json);
                });
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(this.showPosition);
                } else {
                  console.log("Geolocation is not supported by this browser");
                }
              }}
            >
              you are here
            </button>
            <MapContainer lat={this.state.lat} lng={this.state.lng} />
            <Posts showPosition={this.showPosition} />
            <Geolocation lat={this.state.lat} lng={this.state.lng} />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
