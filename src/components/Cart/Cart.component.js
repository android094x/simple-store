import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Cart.styles.scss";

import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

import CartProduct from "../CartProduct/CartProduct.component";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="Cart">
      <div className="item-list">
        {cart.map((product, index) => (
          <CartProduct
            key={index}
            title={product.title}
            image={product.image}
            id={product.id}
            price={product.price}
          />
        ))}
      </div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cart.length} items): <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSparator={true}
          prefix={"$"}
        />

        <button>Procced to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
