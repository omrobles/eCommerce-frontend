import React, { useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../../context/users/UserContext";
import { useNavigate } from "react-router-dom";
import "./FormStyle.css";

const Login = () => {
  const userCtx = useContext(UserContext);

  const { userData, loginUser, handleChange } = userCtx;

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/", { replace: true });
  };

  const loginData = (data) => {
    if (userData.email === "" || userData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios.",
      });
    } else {
      loginUser(data);
      navigateHome();
    }
  };
  return (
    <div className="FormContainer">
      <h1>Ingreso de Usuarios</h1>
      <div className="FormFields">
        <p>**Esta página es con fines académicos. Solo usar valores falsos.**</p>
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
              loginData(userData);
            }}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
