import React, { useReducer } from "react";

import BookContext from "./BookContext";
import BookReducer from "./BookReducer";

import AxiosClient from "../../config/axios";

const BookState = (props) => {
  const initialState = {
    books: [],
  };

  const [globalState, dispatch] = useReducer(BookReducer, initialState);

  const getBooks = async () => {
    try {
      const res = await AxiosClient.get("get-books");
      dispatch({
        type: "GET_BOOKS",
        payload: res.data.books,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books: globalState.books,
        getBooks,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
