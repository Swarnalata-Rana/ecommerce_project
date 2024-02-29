// ... (other imports)
"use strict";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import "./ProductAll.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function ProductAll() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const filterProductsByCategory = (category) => {
      const categoryProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      return categoryProducts.slice(0, 4);
    };
  
    return (
      <div>
        {['electronics', 'jewelery', "women's clothing"].map((category) => (
          <div key={category} className="product-container">
            <div className="row mb-4">
              <h5 className="card-title" style={{ fontWeight: '50' }}>
                {category.toUpperCase()} CATEGORY
              </h5>
            </div>
            <Link href={`/${category}`} className="custom-right-align">
                <Link className="explore" href={`/Product_listing/${category}`}>Explore <ArrowForwardIcon/></Link>
            </Link>
            <div className='row mb-4' style={{ marginLeft: '70px' }}>
              {filterProductsByCategory(category).map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                  <div className='product-row'>
                    <Link href={`/product_details/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: '250px',
                          height: '200px',
                          borderRadius: '8px',
                          display: 'flex',
                          flex: 'wrap',
                          justifyContent: 'space-between',
                        }}
                      />
                    </Link>
                    <div className="p-3">
                      <h6>{product.title}</h6>
                      <div className='rating'>Rating: {product.rating.rate}
                        <p className='price'>Price: ${product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductAll;
  