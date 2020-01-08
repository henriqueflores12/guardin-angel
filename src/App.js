import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./componets/MapContainer";
import NavBar from "./componets/NavBar";
import Home from "./componets/Home";
import {BrowserRouter} from "react-router-dom";
import Router from "./router"

class App extends React.Component {
 
  render() {
    return (
     <BrowserRouter>
     {/* <NavBar/> */}
     <Router/>
     </BrowserRouter>
    );
  }
}

export default App;
