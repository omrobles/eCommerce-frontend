import React, { useContext, useEffect } from "react";
import BookContext from "../../context/books/BookContext";
import { useParams, Link } from "react-router-dom";
import "./BookDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../context/users/UserContext";

const BookDetail = () => {
  const userCtx = useContext(UserContext);
  const { authStatus, updateUser, userData } = userCtx;

  const { _id } = useParams();
  const booksCtx = useContext(BookContext);
  const { books, getBooks } = booksCtx;

  useEffect(() => {
    getBooks(_id);
  }, []);

  const addBook = (bookId) => {
    userData.cart = bookId;
    updateUser(userData);
  };

  const { title, autor, pages, description, imgurl, price } = books[0];
  return (
    <>
      <div id="Backwards">
        <Link to="/catalogo">Volver a Catálogo</Link>
      </div>

      <div className="DetailsContainer">
        <h1>{title}</h1>
        <div className="DetImgSub">
          <img src={imgurl} alt={title} />
        </div>
        <div className="DetInfoSub">
          <p>
            <strong>Precio:</strong> ${price} MXN
          </p>
          <p>
            <strong>Autor:</strong> {autor}
          </p>
          <p>
            <strong>Paginas:</strong> {pages}
          </p>
          <p>
            <strong>Descripción:</strong>
          </p>
          <p>{description}</p>
          {authStatus ? (
            <button
              onClick={() => {
                addBook(_id);
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Agregar
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default BookDetail;
