"use client";
import React, { useEffect, useState } from 'react';

const FakeStoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products${
      selectedCategory ? `?category=${selectedCategory}` : ''
    }`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Limit to only 5 products
        setProducts(data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="product-container">
      <div className="category-buttons">
        <button onClick={() => handleCategoryClick("men's clothing")}>
          Men's Clothing
        </button>
        {/* Add buttons for other categories as needed */}
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            )}
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeStoreProducts;
