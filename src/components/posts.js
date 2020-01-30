import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import vegeta from "./image/vegeta.png";
import Icon from "@material-ui/core/Icon";
import ThumbUpTwoToneIcon from "@material-ui/icons/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownTwoTone";

export default class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dislikes: 0,
      likes: 0,
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
    newComments.unshift(this.state.text);
    this.props.postadd(newComments);
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
          onKeyDown={e => {
            console.log(e.which, e.target.value);
            if (e.which === 13) {
              this.submit();
            }
          }}
          value={this.state.text}
          variant="outlined"
          margin="normal"
          not-required
          fullWidth
          label="comments here"
          autoFocus
        />
        <div className="root1">
          <div className="titlePost">
            <h3 className="textget">
              Paste your geolaction here and a comment to let people know what's happening in that area.
            </h3>
            <ul className="commentspostcolor">
              {this.props.comments.map((comment, index) => (
                <li key={index} className="commets1">
                  <Avatar alt="Remy Sharp" src={vegeta} />
                  <div className="commentboarder">
                    <div className="div1">
                      <p
                        className="commentcolor"
                        onClick={() => {
                          let latlng = comment.split(" ");
                          let position = {
                            coords: {
                              latitude: Number(latlng[0]),
                              longitude: Number(latlng[1])
                            }
                          };
                          this.props.showPosition(position);
                        }}
                      >
                        {comment}
                      </p>
                      <button
                        onClick={() => {
                          console.log(this.props);
                          var commentsNew = this.props.comments;
                          commentsNew.splice(index, 1);
                          console.log(commentsNew);
                          this.setState({ comments: commentsNew });
                          this.props.deletePost(commentsNew);
                        }}
                        className="deletpost"
                      >
                        x
                      </button>
                    </div>

                    <div className="iconsupdown">
                      <h4 className="no">{this.state.likes}</h4>
                      <button
                        onClick={() => {
                          console.log(this.state.likes);
                          this.setState({ likes: this.state.likes + 1 });
                        }}
                      >
                        <ThumbUpTwoToneIcon />
                      </button>
                      <button
                        onClick={() => {
                          console.log(this.state.dislikes);
                          this.setState({ dislikes: this.state.dislikes + 1 });
                        }}
                      >
                        <ThumbDownTwoToneIcon />
                      </button>
                      <h4 className="no">{this.state.dislikes}</h4>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
