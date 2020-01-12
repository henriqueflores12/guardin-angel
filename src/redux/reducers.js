import { combineReducers } from "redux";

const user = (state = {}, action) => {
    switch (action.type) {
      case "SET_USER":
        return action.value;
      default:
        return state;
    }
  };
const login = (state = false, action) => {
  switch (action.type) {
    case "SET_LOGIN_STATUS":    
      return action.value;
    case "LOG_OUT": 
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ user, login });