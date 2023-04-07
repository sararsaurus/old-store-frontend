import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("TESTING INDEX PRODUCTS");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1>Sara's Lab</h1>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}
