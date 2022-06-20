import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BookContext from "../context/books/BookContext";
import BookCard from "./BookCard";
import "./Home.css";

const Home = () => {
  const booksCtx = useContext(BookContext);
  const { books, getSelectedBooks } = booksCtx;

  useEffect(() => {
    getSelectedBooks();
  }, []);

  return (
    <section>
      <div className="Jumbotron">
        <div className="JumboContainer">
          <h1>Aprende finanzas personales de los mejores de la historia.</h1>
          <Link to="/catalogo">Ir al catálogo</Link>
        </div>
      </div>
      <div className="Products">
        <h1>Nuestros Destacados</h1>
        <div className="booksShowcase">
          {books &&
            books.map((book) => {
              return <BookCard key={book._id} book={book} />;
            })}
          <Link title="Ir a catálogo" id="linkCatalog" to="/catalogo">
            ...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
