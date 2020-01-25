export const setLogin = boolean => {
  console.log('here')  
  return {
    type: "SET_LOGIN_STATUS",
    value: boolean // true or false
  }
};
  export const setUser = user => {
    return {
      type: "SET_USER",
      value: user
    };
  };
  export const logout = boolean => {
    return {
      type: "LOG_OUT",
      value: false
    };
  };
  export const postadd = post => {
    console.log('it hit actions', post)
    return {
      type: "CREATE_POST",
      value: post
    };
  };
  export const deletePost = post => {
    return {
      type: "DELETE_POST",
      value: post
    };
  };