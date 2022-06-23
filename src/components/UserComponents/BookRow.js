import React, { useContext } from "react";
import UserContext from "../../context/users/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BookRow = (props) => {
  const userCtx = useContext(UserContext);
  const { removeFromCart, userData } = userCtx;

  const { title, autor, price, _id } = props.book;

  const removeBook = (bookId) => {
    userData.cart = bookId;
    removeFromCart(userData);
  };

  return (
    <tr>
      <th>{title}</th>
      <th>{autor}</th>
      <th>{`$${price}`}</th>
      <th>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => {
            removeBook(_id);
          }}
        />
      </th>
    </tr>
  );
};

export default BookRow;
