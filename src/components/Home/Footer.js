import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <FontAwesomeIcon icon={faCopyright} />
      <p>2022 U-Camp. Todos los derechos reservados. Esta página es para fines académicos.</p>
    </div>
  );
};

export default Footer;
