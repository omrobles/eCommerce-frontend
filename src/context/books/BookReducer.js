const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...globalState,
        books: action.payload,
      };
    case "SELECTED_BOOKS":
      return {
        ...globalState,
        books: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
