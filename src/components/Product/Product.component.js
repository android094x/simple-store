import React from "react";
import "./Product.styles.scss";

import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, price, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const handleAddToCartButtonClick = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="Product">
      <img src={image} alt={title} className="image" />
      <div className="details">
        <h3>{title}</h3>
        <h5>${price}</h5>
      </div>
      <button onClick={handleAddToCartButtonClick} className="btn-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
