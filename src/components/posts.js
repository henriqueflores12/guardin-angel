import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from '@material-ui/core/Avatar';
import vegeta from './image/vegeta.png';


export default class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      comments: []
    };
  }
  changetext = e => {
    this.setState({ text: e.target.value });
    console.log(e.target.value);
  };
  submit = () => {
    let newComments = this.state.comments;
    newComments.push(this.state.text);
    this.setState({
      comments: newComments,
      text: ""
    });
  };
  render() {
    console.log(this.state);
    console.log(this.props, "here ok");
    return (
      <div className="posts">
        <button className="postbutton" onClick={this.submit}>
          click here to post
        </button>
        <TextField
          className="textfield1"
          onChange={this.changetext}
          onKeyDown={(e)=>{
            console.log(e.which, e.target.value)
            if(e.which === 13){
              this.submit()
            }
          }}
          variant="outlined"
          margin="normal"
          not-required
          fullWidth
          label="comments here"
          autoFocus
        />
        <div className="root1">
          <div className="titlePost">
            <h2>post</h2>
            <ul className="commentspostcolor">
              {this.state.comments.map((comment, index) => (
                <li key={index} className="commets1">
                  <Avatar alt="Remy Sharp" src={vegeta} />
                  <p className="commentcolor" onClick={()=>{
                    let latlng=comment.split(' ')
                    let position= {
                      coords: {
                        latitude: Number(latlng[0]),
                        longitude: Number(latlng[1])
                      }
                      
                    } 
                    this.props.showPosition(position)
                  }}>{comment}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
