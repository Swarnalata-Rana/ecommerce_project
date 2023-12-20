// "use client";
// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar';
// import ProductDetails from '../ProductDetails';
// import "bootstrap/dist/css/bootstrap.min.css";

// const View = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'https://fakestoreapi.com/products';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseDetails = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container product-container">
//         <div className="row">
//           <div className="col-12 category-buttons">
//             {/* Add buttons for other categories as needed */}
//           </div>
//         </div>
//         <div className="row product-list">
//           {products.map((product) => (
//             <div key={product.id} className="col-md-3 product-item" onClick={() => handleProductClick(product)}>
//               {product.image && (
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="product-image img-fluid"
//                 />
//               )}
//               <h2 className="product-title">{product.title}</h2>
//               <p className="product-category">Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//         {selectedProduct && (
//           <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
//         )}
//       </div>
//     </>
//   );
// };

// export default View;


"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

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
      <Navbar />
      <div className="product-container">
        <div>
          <h1 className='category'>All Cloths</h1>
          <button onClick={() => setMensProducts([])}>Reset</button>
        </div>
        <div className="product-list">
          {mensProducts.map((product) => (
            <div key={product.id} className="product-item">
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
  );
};

export default Cloths_view_all;
