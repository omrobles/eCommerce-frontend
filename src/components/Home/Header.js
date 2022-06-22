import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../media/Cochinito_Lector-SF.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserGear,
  faUserPlus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="NavBar">
      <div id="staticLinks">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/catalogo">Catálogo</Link>
      </div>
      <div id="dynamicLinks">
        <Link title="Carrito" to="/carrito">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <Link title="Perfil" to="/perfil">
          <FontAwesomeIcon icon={faUserGear} />
        </Link>
        <Link title="Registro" to="/registro">
          <FontAwesomeIcon icon={faUserPlus} />
        </Link>
        <Link title="Acceder" to="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
