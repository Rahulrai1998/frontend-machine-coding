import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div>
        {" "}
        <img src={product?.images[0]} alt={product?.title} />
      </div>
      <div>
        {" "}
        <span className="product-title">{product?.title}</span>
      </div>
    </div>
  );
};

export default ProductCard;
