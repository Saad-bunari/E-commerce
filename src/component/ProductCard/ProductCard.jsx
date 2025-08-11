import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="product-card product-card-modern clickable-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-container product-image-container-modern">
        <img
          src={product.thumbnail || "/assets/default.png"}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-badge-row">
        {product.discountPercentage && (
          <span className="nearest-badge">
            Sale {Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      <div className="px-3 pb-3">
        <div className="product-title">{product.title}</div>
        <div className="product-shipping">Shipped in 3-4 days</div>
        <div className="product-price-modern">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
