import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { setLogin } from "../redux/actions";

const mapStateToProps = state => ({
  user: state.user,
  login: state.login
});
const mapDispatchToProps = dispatch => {
  return {
    setLogin: boolean => dispatch(setLogin(boolean))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
