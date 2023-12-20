"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'
import Place from './Place'
import Registerform from './Registerform'
import Eloctronics from "./Eloctronics";
import Cloths from "./Cloths";

const Page = () => {
  return (
    <>
        <Navbar/>
         {/* <Header/>  */}
        <Slider/>
        <Cloths/>
        <Eloctronics/>
        <Place/>
        <Footer/>
        {/* <Registerform/> */}
        {/* <Product/> */}
    </>
  )
}

export default Page;
