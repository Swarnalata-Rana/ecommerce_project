"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

const ProductDetails = ({ product, onClose }) => (
  <div className="product-details">
    <button className="btn btn-secondary" onClick={onClose}>Close</button>
    {product.image && (
      <img
        src={product.image}
        alt={product.title}
        className="product-image img-fluid"
      />
    )}
    <h2 className="product-title">{product.title}</h2>
    <p className="product-category">Category: {product.category}</p>
    {/* Add other details as needed */}
  </div>
);

const Eloctronics = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Filter products to show only electronics category
        const electronicsProducts = data.filter((product) => product.category.toLowerCase().includes('electronics'));
        // Limit to only 4 products
        setElectronicsProducts(electronicsProducts.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container product-container">
      <div className="row">
        <div className="col-12">
          <h1 className='category'>Electronics Category</h1>
          <a className='btn btn-primary' href='elo'>View All</a>          
        </div>
      </div>
      <div className="row product-list">
        {electronicsProducts.map((product) => (
          <div key={product.id} className="col-md-3 product-item" onClick={() => handleProductClick(product)}>
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="product-image img-fluid"
              />
            )}
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">Category: {product.category}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default Eloctronics;
