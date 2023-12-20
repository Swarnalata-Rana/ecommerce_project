"use client";
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../home/page';
const  JewelleryAll= () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Filter products to show only jewelry category
        const jewelryProducts = data.filter((product) => product.category.toLowerCase().includes('jewel'));
        setProducts(jewelryProducts);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div><Home/>
    <div className="product-container">
      <div>
        <h1 className='cataegory'>Jewelry </h1>
        {/* Example of category button */}
        <button onClick={() => setProducts([])}>Reset</button>
        {/* Add more category buttons as needed */}
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
    </div>
  );
};

export default JewelleryAll;
