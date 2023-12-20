"use client";
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar';

const Electronics_view_all = () => {
  const [electronicsProducts, setElectronicsProducts] = useState([]);

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
        setElectronicsProducts(electronicsProducts);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div><Navbar/>
    <div className="product-container">
      <div>
        <h1 className='category'>All Electronics</h1>
        <button onClick={() => setElectronicsProducts([])}>Reset</button>
      </div>
      <div className="product-list">
        {electronicsProducts.map((product) => (
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

export default Electronics_view_all;
