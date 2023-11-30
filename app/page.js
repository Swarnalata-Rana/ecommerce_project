import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.css'
// import styles from '../../styles/globals.css';
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'
import Slider from './Slider'
import Place from './Place'
import Registerform from './Registerform'
import Product from './Product'

const page = () => {
  return (
    <>
        <Navbar/>
        {/* <Header/> */}
        <Slider/>
        <Product/>
        <Place/>
        <Footer/>
        {/* <Registerform/> */}
        {/* <Product/> */}
    </>
  )
}

export default page