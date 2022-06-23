import React, { useEffect, useContext, useState } from "react";
import BookContext from "../../context/books/BookContext";
import UserContext from "../../context/users/UserContext";
import PaypalButton from "../../Paypal/PaypalButton";
import BookRow from "./BookRow";
import "./ShopBag.css";

const ShopBag = () => {
  const userCtx = useContext(UserContext);
  const { verifyingToken, user } = userCtx;

  const booksCtx = useContext(BookContext);
  const { books, getBooks } = booksCtx;

  const [cartBooks, setCartBooks] = useState([]);
  const [totalPay, setTotalPay] = useState();

  const filledCart = () => {
    const booksArray = user.cart.map((id) => {
      const findBook = books.find((book) => {
        return book._id === id;
      });
      return findBook;
    });
    setCartBooks(booksArray);
  };

  const sumTotal = () => {
    let total = 0;
    cartBooks.forEach((el) => {
      total = el.price + total;
    });
    return setTotalPay(total);
  };

  const reload = async () => {
    await verifyingToken();
    await getBooks();
    await filledCart();
    await sumTotal();
  };

  useEffect(() => {
    reload();
  }, [cartBooks]);

  return (
    <div className="CartContainer">
      <h2>Carrito de compras</h2>
      <table>
        <thead>
          <tr>
            <th>Libro</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartBooks.length > 0 &&
            cartBooks.map((el) => {
              return <BookRow key={el._id} book={el} />;
            })}
        </tbody>
      </table>
      <div className="CheckoutContainer">
        <div>
          <h3>Total: ${totalPay} </h3>
          <PaypalButton total={totalPay} />
        </div>
      </div>
    </div>
  );
};

export default ShopBag;
