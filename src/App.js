import React from "react";
import logo from "./logo.svg";
import "./App.css";




function showPosition(position){
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)

}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>report crime or shooting by pushing the button down here</h3>
        <button onClick={()=>{
         if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log("Geolocation is not supported by this browser")
        }}}>report shooting</button>















        {/* <iframe
          width="600"
          height="450"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLwPMoJm1RIYRetVp1EtGm10&"
          allowfullscreen
        ></iframe> */}
        
      </header>
    </div>
  );
}

export default App;
