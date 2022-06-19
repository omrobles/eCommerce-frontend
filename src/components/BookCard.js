import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = (props) => {
  const { title, autor, imgurl, price } = props.book;
  return (
    <div className="Card">
      <div className="ImageContainer">
        <img src={imgurl} />
      </div>
      <div className="InfoContainer">
        <h3>{title}</h3>
        <p>Autor: {autor}</p>
        <p>Precio: ${price}</p>
        <div>
          <Link to="/catalogo">Ver más</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
