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

