import React, { useEffect, useContext } from "react";
import BookContext from "../context/books/BookContext";
import BookCard from "./BookCard";
import "./Catalog.css";

const Catalog = () => {
  const booksCtx = useContext(BookContext);
  const { books, getBooks } = booksCtx;

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className="Catalog">
      <h1>Nuestro catálogo de libros</h1>
      <div className="CatalogContainer">
        {books &&
          books.map((book) => {
            return <BookCard key={book._id} book={book} />;
          })}
      </div>
    </section>
  );
};

export default Catalog;
