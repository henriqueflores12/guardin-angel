import React, { Component } from 'react'
import Router from '../router'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import MapContainer from "./MapContainer";
import Posts from "../containers/postContainer";
import Geolocation from "./geolocation";
export default class safelocations extends Component {
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
            <div className="bodysafe">   
          <h1 className="h1safe">post why here is safe</h1>
          <div className="postsafe1">
          <Posts className ="postcolor"showPosition={this.showPosition}/>         
          </div>
          <div className="safemap">
          <MapContainer lat={this.state.lat} lng={this.state.lng} />
          </div>                  
          </div>
        )
    }
}
