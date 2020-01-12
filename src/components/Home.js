import React from "react";
import "../App.css";
import MapContainer from "./MapContainer";
import NavBar from "./NavBar";

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
          
          <h3>report if you think that this place is not safe to others come here</h3>
       
          <button className="report"
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
              } else {
                console.log("Geolocation is not supported by this browser");
              }
            }}
          >
            report
          </button>
          <div className="map">
            <MapContainer lat={this.state.lat} lng={this.state.lng} />
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
