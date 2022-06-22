import React from "react";
import UserContext from "../../context/users/UserContext";
import { Navigate } from "react-router-dom";
import "./FormStyle.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const Signup = () => {
  return (
    <div className="FormContainer">
      <h1>Registro de Usuarios</h1>
      <form>
        <label htmlFor="name">Nombre Completo</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
};
export default Signup;
