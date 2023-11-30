'use client'
// import React from 'react'

// const Product = () => {
//   return (
//     <div className='main_product'>
    
//       <div className='row1'>
//         <div className='col1'></div>
//         <div className='col2'></div>
//         <div className='col3'></div>
//         <div className='col4'></div>
//         <div className='col5'></div>
//       </div>
    
//       <div className='row2'>
//         <div className='col6'></div>
//         <div className='col7'></div>
//         <div className='col8'></div>
//         <div className='col9'></div>
//         <div className='col10'></div>
//       </div>
      
//       <div className='row3'>
//         <div className='col11'></div>
//         <div className='col12'></div>
//         <div className='col13'></div>
//         <div className='col14'></div>
//         <div className='col15'></div>
//       </div>
//     </div>
//   )
// }
// export default Product

import React, { useState, useEffect } from 'react';

const Product = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once on mount

  return (
    <div className='main_product'>
      {/* Your existing code here */}
      {/* Display API data */}

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
   
      {apiData && (
        <div>
            <h2>API Data:</h2>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Product;
