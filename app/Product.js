
import React from 'react'

const Product = () => {
  return (
    <div className='main_product'>
    
      <div className='row1'>
        <div className='col1'></div>
        <div className='col2'></div>
        <div className='col3'></div>
        <div className='col4'></div>
        <div className='col5'></div>
      </div>
    
      <div className='row2'>
        <div className='col6'></div>
        <div className='col7'></div>
        <div className='col8'></div>
        <div className='col9'></div>
        <div className='col10'></div>
      </div>
      
      <div className='row3'>
        <div className='col11'></div>
        <div className='col12'></div>
        <div className='col13'></div>
        <div className='col14'></div>
        <div className='col15'></div>
      </div>
    </div>
  )
}
export default Product

// "use client";
// import React, { useEffect, useState } from 'react';

// const Product = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const apiUrl = 'https://fakestoreapi.com/products';

//     const fetchData = async () => {
//       try {
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Limit to only 5 products
//         setProducts(data.slice(0, 5));
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="product-container">
//       <div>
//         <h1 className='cataegory'>Product Category</h1>
//         <a className='view' href='view'>View All</a>
//       </div>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-item">
//             {product.image && (
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="product-image"
//               />
//             )}
//             <h2 className="product-title">{product.title}</h2>
//             <p className="product-category">Category: {product.category}</p>
//             {/* <p className="product-description">
//               {product.description
//                 ? `${product.description.substring(0, 150)}...`
//                 : 'No description available'}
//             </p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;