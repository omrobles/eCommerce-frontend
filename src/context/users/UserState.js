import React, { useReducer, useState } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import AxiosClient from "../../config/axios";

const UserState = (props) => {
  const initialState = {
    user: {
      name: null,
      email: null,
      address: null,
      cart: [],
      orders: [],
    },
    authStatus: false,
    loading: true,
  };

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    cart: [],
    orders: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = async (data) => {
    try {
      const res = await AxiosClient.post("/users/register", data);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      AxiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete AxiosClient.defaults.headers.common["x-auth-token"];
    }
    try {
      const res = token && (await AxiosClient.get("/users/verify-user"));
      dispatch({
        type: "GET_USER",
        payload: res.data,
      });
    } catch (error) {
      console.log("Error verificando token", error);
    }
  };

  const loginUser = async (userData) => {
    try {
      const res = await AxiosClient.post("/users/login", userData);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        loading: globalState.loading,
        registerUser,
        loginUser,
        handleChange,
        verifyingToken,
        logout,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
