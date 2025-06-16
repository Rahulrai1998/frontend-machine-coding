import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import ProductCard from "./components/ProductCard";
import { PRODUCT_PER_PAGE } from "./constants";
import PageList from "./components/PageList";

const Pagination = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data?.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProduct = products.length;
  const totalPages = Math.ceil(totalProduct / PRODUCT_PER_PAGE);
  const start = PRODUCT_PER_PAGE * currentPage;
  const end = start + PRODUCT_PER_PAGE;

  const handleClick = (i) => {
    setCurrentPage(i);
  };

  const handlePrevious = () => setCurrentPage((page) => page - 1);
  const handleNext = () => setCurrentPage((page) => page + 1);

  const productList = useMemo(() => {
    return products
      ?.slice(start, end)
      ?.map((product) => <ProductCard product={product} key={product?.id} />);
  }, [products, start, end]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if ((!loading && !products) || products?.length === 0)
    return <h1 style={{ textAlign: "center" }}>Empty List</h1>;

  return (
    <>
      {/* {new Array(totalPages)?.fill(null)?.map((_, i) => (
        <button key={i}>{i + 1}</button>
      ))} */}
      <PageList
        currentPage={currentPage}
        handleClick={handleClick}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        totalPages={totalPages}
      />
      <div className="products-container">{productList}</div>
    </>
  );
};

export default Pagination;
