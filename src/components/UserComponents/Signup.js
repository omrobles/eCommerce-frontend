import React, { useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";
import "./FormStyle.css";

const Signup = () => {
  const userCtx = useContext(UserContext);

  const { userData, registerUser, handleChange } = userCtx;

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/", { replace: true });
  };

  const sendData = async (data) => {
    if (userData.name === "" || userData.email === "" || userData.name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios.",
      });
    } else {
      registerUser(data);
      navigateHome();
    }
  };

  return (
    <div className="FormContainer">
      <h1>Registro de Usuarios</h1>
      <div className="FormFields">
        <p>**Esta página es con fines académicos. Solo usar valores falsos.**</p>
        <label htmlFor="name">Nombre Completo</label>
        <input id="name" name="name" type="text" required onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required onChange={handleChange} />
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" required onChange={handleChange} />
        <div className="Buttons">
          <button
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              sendData(userData);
            }}
          >
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
