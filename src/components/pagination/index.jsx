import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductCard from "./components/ProductCard";

const Pagination = () => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products?.products || products?.products?.length === 0)
    return <h1 style={{ textAlign: "center" }}>Empty List</h1>;

  return (
    <div className="products-container">
      {products?.products?.map((product) => {
        return <ProductCard product={product} key={product?.id} />;
      })}
    </div>
  );
};

export default Pagination;
