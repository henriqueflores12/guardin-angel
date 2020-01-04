import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./componets/MapContainer";



class App extends React.Component {
  // state = {lat:"",lng:""
  

  // }
  constructor (props){
    super(props);
  
    this.state = {
        lat: "",
        lng: "",
    };   
  }
  showPosition = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(this)
    this.setState({
      lat:position.coords.latitude,
      lng:position.coords.longitude
    })
  }
  
  render(){
    
    return  (
      <div className="App">
        <header className="App-header">
          <h3>report crime or shooting by pushing the button down here</h3>
          <button
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition);
              } else {
                console.log("Geolocation is not supported by this browser");
              }
            }}
          >
            report shooting
          </button>
  
          <div className="map">
            <MapContainer lat={this.state.lat} lng={this.state.lng}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
