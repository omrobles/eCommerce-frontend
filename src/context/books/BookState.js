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
      const res = await AxiosClient.get("/book/get-books");
      dispatch({
        type: "GET_BOOKS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedBooks = async () => {
    try {
      const res = await AxiosClient.get("/book/selected-books");
      dispatch({
        type: "SELECTED_BOOKS",
        payload: res.data,
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
        getSelectedBooks,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
