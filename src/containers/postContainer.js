import { connect } from "react-redux";
import Posts from "../components/posts"



const mapStateToProps = state => ({
  user: state.user,
  login: state.login
});

export default connect(mapStateToProps,null )(Posts);