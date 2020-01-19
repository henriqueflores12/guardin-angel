import React, { Component } from 'react'
import Router from '../router'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import MapContainer from "./MapContainer";
import Posts from "../containers/postContainer";
export default class safelocations extends Component {
    render() {
        return (
            <div className="bodysafe">   
          <h1 className="h1safe">post why here is safe</h1>
          <div className="postsafe1">
          <Posts className ="postcolor"/>         
          </div>
          <div className="safemap">
          <MapContainer/>
          </div>          
          </div>
        )
    }
}
