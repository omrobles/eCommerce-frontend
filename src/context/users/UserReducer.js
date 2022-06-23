const reducer = (globalState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...globalState,
        authStatus: true,
      };
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...globalState,
        authStatus: true,
      };
    case "GET_USER":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...globalState,
        user: null,
        authStatus: false,
        loading: true,
      };
    default:
      return globalState;
  }
};

export default reducer;
