'use client'
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className='navbar_bg'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src='e-logo.png'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/women">Women</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/men">Men</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/jewelleryall">Jewelery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/elo">Electronic</a>
                </li>
                <li className="nav-item">
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
              <a className="nav-link" href="#" onClick={handleAddToCart}>
                    <ShoppingCartIcon /> 
                    {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
                </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
