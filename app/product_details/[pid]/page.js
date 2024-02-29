"use client";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './details.css';

function Page({ params }) {
    const [productDetails, setProductDetails] = useState(null);

    const fetchProductDetails = () => {
        fetch(`https://fakestoreapi.com/products/${params.pid}`)
            .then((res) => res.json())
            .then((res) => {
                setProductDetails(res);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    };

    useEffect(() => {
        fetchProductDetails();
    }, [params.pid]);


    if (!productDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='container' >
                <div className='col-md-6' id='one-image' >
                    <img
                        id='one-image'
                        src={productDetails.image}
                    />
                </div>
                <div className='col-md-6' id='discription'>
                    <p>Product ID: {productDetails.id}</p>
                    <h4>Title: {productDetails.title}</h4>
                    <p>{productDetails.description}</p>
                    <h4>Rs : {productDetails.price}</h4>
                    <div className='aad-to'>
                        <a class="add-to-cart" href='../one-details'>Add To Cart<ArrowForwardIcon /></a>
                    </div>                
                    
                </div>
            </div>
            {/* <div className='aad-to'>
                <a class="add-to-cart" href='../one-details'>Add To Cart<ArrowForwardIcon /></a>
            </div> */}
            <div className='gap-tag'></div>
        </>
    );
}
export default Page;