import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <nav className='header'>Navbar
        <input className='search_bar' type="text" placeholder='Search here'/>
        <ul className='ul_tag_header'>
          {/* <li>
              <Link className='text-decoration' href="/Home.js">Navbar</Link>
          </li> */}
          <li>
              <Link className='text-decoration' href="/women">Women</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/men">Men</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/jewellery">Jewellery</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/shoes">Shoes</Link>
          </li>
          {/* <li>
              <Link className='text-decoration' href="/Home.js">Pages</Link>
          </li> */}
        </ul>
      </nav>
    
    </div>
  )
}
export default Home;