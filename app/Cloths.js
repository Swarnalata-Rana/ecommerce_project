"use client";
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cloths = () => {
  const [products, setProducts] = useState([]);
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
        // Limit to only 5 products
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
        <div className="container product-container">
            <div className="row">
                <div className="col-12">
                    <h2 className='category'>Cloths Category</h2>
                    <a className='btn btn-primary' href='clothsall'>View All</a>
                </div>
            </div>
            <div className="row product-list" id='product-list-row'>
                {products.map((product) => (
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
        </div>
    </div>
  );
};
export default Cloths;




