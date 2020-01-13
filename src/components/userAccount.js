import React ,{Component} from "react";
import SignUpContainer from "./SignupContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router-dom";


export default class userAccount extends Component {
  render() {
    return (
      <div>
          <Link to="/UserAccount"/>
        <MuiThemeProvider>
          <SignUpContainer />
        </MuiThemeProvider>
        
      </div>
    );
  }
}
