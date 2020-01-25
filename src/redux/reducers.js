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
const comments = (state = [], action) => {
  console.log('it hit reducer', action)
  switch (action.type) {
    case "CREATE_POST":    
      return action.value;
    case "GET_POSTS": 
      return action.value;
    case "DELETE_POST":
      return action.value;
    default:
      return state;
  }
};


export default combineReducers({ user, login, comments });