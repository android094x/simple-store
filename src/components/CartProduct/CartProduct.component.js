import React from "react";
import "./CartProduct.styles.scss";

import { useStateValue } from "../../StateProvider";

const CartProduct = ({ id, title, price, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveFromCartButtonClick = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="CartProduct">
      <img src={image} alt={title} className="image" />
      <div className="details">
        <h3>{title}</h3>
        <h5>${price}</h5>
        <button onClick={handleRemoveFromCartButtonClick} className="btn-cart">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
