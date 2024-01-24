"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import Place from './Place';
import Eloctronics from "./Eloctronics";
import Cloths from "./Cloths";
import Delevery_form from "./delivery/page";
import Successfully from "./successfully/page";
import Cart from "./cart/page";
import One_details from "./one-details/page";

const Page = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Slider/>
        <Cloths/>
        <Eloctronics/>
        <Place/>
        {/* <Footer/> */}
        {/* <Product/> */}
        {/* <Pageshow/>f */}
        {/* <Delevery_form/> */}
        {/* <Successfully/> */}
        {/* <Cart/> */}
        {/* <One_details/> */}
    </>
  )
}
export default Page;
