import React from "react";
import "./Header.styles.scss";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../StateProvider";

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <header className="Header">
      <nav>
        <div className="logo">
          <h4>
            <Link to="/">Simple Store</Link>
          </h4>
        </div>
        <div className="menu-outer">
          {/* <ul className="menu-inner">
            <li>
              <Link to="/">Add Product</Link>
            </li>
          </ul> */}
          <span className="cart">
            <Link to="/cart">
              <ShoppingCartIcon />
              <span className="quantity">{cart.length}</span>
            </Link>
          </span>
        </div>
      </nav>
      {/* <Slider /> */}
    </header>
  );
};

export default Header;
