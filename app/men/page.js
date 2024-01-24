"use client";
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const MensAll = () => {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    // Inside your fetchData function
const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Filter products to show only men's category
    const mensProducts = data.filter(
      (product) => product.category.toLowerCase().includes('men') && !product.category.toLowerCase().includes('women')
    );
    setMensProducts(mensProducts);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};


    fetchData();
  }, []);

  return (
    <div>
    <div className="product-container">
      <div>
        <h1 className='category'>Men's Products</h1>
        <button onClick={() => setMensProducts([])}>Reset</button>
      </div>
      <div className="product-list">
        {mensProducts.map((product) => (
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
    </div>
  );
};

export default MensAll;
