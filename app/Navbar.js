// import React from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const Navbar = () => {
//   return (
//     <div>
        
//     <div className='navbar_bg'>
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">eCommerceApp</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="/home">Home</a>
//                         </li>
//                         {/* <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="/register">Register</a>
//                         </li> */}
//                         <li class="nav-item">
//                             <a class="nav-link" href="#"><ShoppingCartIcon/></a>
//                         </li>
//                     </ul>
//                     <form class="d-flex" role="search">
//                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button class="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     </div>
//     </div>


//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  // Function to handle adding items to the cart
  const handleAddToCart = () => {
    // Perform logic to add items to the cart
    // For simplicity, increment the cartItems count
    setCartItems((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div className='navbar_bg'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">eCommerceApp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">About</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/register">Register</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleAddToCart}>
                    <ShoppingCartIcon />
                    {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;


