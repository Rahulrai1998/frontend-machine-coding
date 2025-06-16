import React from "react";

const ProductCard = React.memo(({ product }) => {
  const { title, images } = product || {};
  return (
    <div className="product-card">
      <div>
        {" "}
        <img src={images[0]} alt={title || "Product image"} />
      </div>
      <div>
        {" "}
        <span className="product-title">{title}</span>
      </div>
    </div>
  );
});

export default ProductCard;
