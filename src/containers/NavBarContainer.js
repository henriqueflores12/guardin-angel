import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import {logout} from '../redux/actions';


const mapStateToProps = state => ({
    user: state.user,
    login: state.login
  })
const mapDispatchToProps = (dispatch)=>{
    return {
      logout:(boolean)=>dispatch(logout(boolean)),
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(NavBar)