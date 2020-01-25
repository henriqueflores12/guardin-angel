import { connect } from "react-redux";
import Posts from "../components/posts";
import { deletePost, postadd } from "../redux/actions";

const mapStateToProps = state => {
  console.log(state, "container state");
  return {
    user: state.user,
    login: state.login,
    comments: state.comments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deletePost: comments => dispatch(deletePost(comments)),
    postadd: comments => dispatch(postadd(comments))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
