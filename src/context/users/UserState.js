import React, { useReducer, useState } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import AxiosClient from "../../config/axios";
import Swal from "sweetalert2";

const UserState = (props) => {
  const initialState = {
    user: {
      name: "",
      email: "",
      address: "",
      cart: [],
      orders: [],
    },
    authStatus: false,
    loading: true,
  };

  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  const [userData, setUserData] = useState({
    // name: "",
    // email: "",
    // address: "",
    // password: "",
    // cart: [],
    // orders: [],
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
      Swal.fire({
        icon: "success",
        title: "Felicidades",
        text: "Tu registro ha sido exitoso",
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.msg === "User already exist") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El correo usado ya esta registrado.",
        });
      }
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
        payload: res.data.user,
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
      Swal.fire({
        icon: "success",
        text: "Has iniciado sesión.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los datos no coinciden.",
      });
    }
  };

  const updateUser = async (userData) => {
    const token = localStorage.getItem("token");
    if (token) {
      AxiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete AxiosClient.defaults.headers.common["x-auth-token"];
    }
    try {
      const res = await AxiosClient.put("/users/update-user", userData);
      dispatch({
        type: "UPDATE_USER",
        payload: res.data,
      });
      Swal.fire({
        icon: "success",
        text: "Información actualizada",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (userData) => {
    const token = localStorage.getItem("token");
    if (token) {
      AxiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete AxiosClient.defaults.headers.common["x-auth-token"];
    }
    try {
      const res = await AxiosClient.put("/users/update-cart", userData);
      dispatch({
        type: "UPDATE_USER",
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
        updateUser,
        removeFromCart,
        logout,
        userData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
