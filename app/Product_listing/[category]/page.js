"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import "../product_lis.css"

export default function ProductList({ params }) {
    const [categoryProducts, setCategoryProducts] = useState([]);

    const fetchCategoryProducts = () => {
        fetch(`https://fakestoreapi.com/products/category/${params.category}`)
            .then((res) => res.json())
            .then((res) => {
                setCategoryProducts(res);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    useEffect(() => {
        fetchCategoryProducts();
    }, [params.category]);

    if (!categoryProducts) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid">

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

            <div className='col-md-9'>
                <div className="row">
                    {categoryProducts.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div>
                                <Link href={`/product_details/${product.id}`}>
                                    <div className='image-title'>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            style={{ width: '250px', height: '200px', borderRadius: '8px' }}
                                        />
                                    </div>
                                </Link>
                                <div className="p-3">
                                    <h6>{product.title}</h6>
                                    <div className='rating'>Rating: {product.rating.rate}</div>
                                    <div className='price'>Price: ${product.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
