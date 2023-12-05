import React from 'react';

const ProductDetails = ({ product, onClose }) => (
  <div className="product-details">
    <button onClick={onClose}>Close</button>
    {product.image && (
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
    )}
    <h2 className="product-title">{product.title}</h2>
    <p className="product-category">Category: {product.category}</p>
    {/* Add other details as needed */}
  </div>
);

export default ProductDetails;
