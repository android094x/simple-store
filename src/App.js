import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Products from "./components/Products/Products.component";
import Cart from "./components/Cart/Cart.component";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
