import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.styles.scss";

import Product from "../Product/Product.component";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const onlyClothing = products.map((product) => {
    if (
      product.category === "women clothing" ||
      product.category === "men clothing"
    ) {
      return (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      );
    }
    return undefined;
  });

  return <div className="Products">{onlyClothing}</div>;
};

export default Products;
