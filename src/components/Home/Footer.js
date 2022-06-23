import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <p>
          <span>
            <FontAwesomeIcon icon={faCopyright} />
          </span>
          2022 U-Camp. Todos los derechos reservados. Esta página es para fines académicos.
        </p>
      </div>
    </div>
  );
};

export default Footer;
