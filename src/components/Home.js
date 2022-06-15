import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="Jumbotron">
        <div className="JumboContainer">
          <h1>Aprende finanzas personales de los mejores de la historia.</h1>
          <Link to="/catalogo">Ir al catalogo</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
