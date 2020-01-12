import React from "react";
import "./App.css";
import NavBar from "./containers/NavBarContainer";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
