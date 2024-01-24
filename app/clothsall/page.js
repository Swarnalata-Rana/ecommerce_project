"use client";
import React, { useEffect, useState } from 'react';
import './cloth.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const Cloths_view_all = () => {
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Filter products to show only men's category
        const mensProducts = data.filter((product) => product.category.toLowerCase().includes('men'));
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
            <div class='header'>
                <h3 className='catarory'>CATAGORY / AND PRODUCT NAME</h3>
                <p className='paragrap'>Crafted Elegance: Artisanal Wooden Furniture</p>
            </div>
            <div>
                <div className='not-selected'>Filters : Not Selected</div>
                <div className='sort_name'>Sort By: Name  A To Z
                    <select id="option">
                        <option value="volvo"></option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>

        {/* <div>
          <h3 className='category'></h3>
          <button onClick={() => setMensProducts([])}>Reset</button>
        </div> */}

        <div className='filter_box'>
            <div className='filter-box2'>Filter</div>
            <div className='clear'>CLEAR</div>
            <hr></hr>
            <div className='select-brand'>Select Brand</div>
            <div className='check-box'>
                {/* onChange = {handleChange} check box vitare a handerta lagiba */}
                <input value = "One" type = "checkbox" /> 
                <span> Nike </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> Pooma </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> Reebok </span>
            </div>
            <div className='more'>more 34 +</div>
            <hr></hr>
            <div className='select-brand'>Select Star Rating</div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 200 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 500 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 700 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 1000 </span>
            </div>
            <hr></hr>
            <div className='select-brand'>Select Prize Range</div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 200 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 500 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 700 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 1000 </span>
            </div>
            <div className='check-box'>
                <input value = "One" type = "checkbox" /> 
                <span> up to 1250 </span>
            </div>
            <div className='more'>more 34 +</div>
            <hr></hr>
        </div>

        <div className=''></div>
        <div className='productimg'>
            <div className="product-list">
            {mensProducts.map((product) => (
                <div key={product.id} className="col-md-4 product-item">
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
    </div>
  );
};

export default Cloths_view_all;
