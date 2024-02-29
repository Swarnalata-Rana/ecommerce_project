"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Slider from './Slider';
import Place from './Place';
import ProductAll from "./ProductAll";

const Page = () => {
  return (
    <>
      <Slider />
      <div className="container">
        <ProductAll />
      </div>
      <Place />

    </>
  )
}
export default Page;
