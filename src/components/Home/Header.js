import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../media/Cochinito_Lector-SF.png";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserGear,
  faUserPlus,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../context/users/UserContext";

const Header = () => {
  const userCtx = useContext(UserContext);

  const { authStatus, logout } = userCtx;

  const exit = () => {
    logout();
    Swal.fire({
      icon: "info",
      title: "Sesión cerrada.",
      text: "Has terminado sesión.",
    });
  };

  return (
    <nav className="NavBar">
      <div id="staticLinks">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/catalogo">Catálogo</Link>
      </div>
      <div id="dynamicLinks">
        {authStatus ? (
          <>
            <Link title="Carrito" to="/carrito">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <Link title="Perfil" to="/perfil">
              <FontAwesomeIcon icon={faUserGear} />
            </Link>
            <Link to="/" onClick={exit}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </>
        ) : (
          <>
            <Link title="Registro" to="/registro">
              <FontAwesomeIcon icon={faUserPlus} />
            </Link>
            <Link title="Acceder" to="/login">
              <FontAwesomeIcon icon={faRightToBracket} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
