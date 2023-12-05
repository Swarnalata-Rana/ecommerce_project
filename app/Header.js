import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <nav className='header'>
        {/* <input className='search_bar' type="text" placeholder='Search here'/> */}
        <ul className='ul_tag_header'>
          {/* <li>
              <Link className='text-decoration' href="/Home.js">Home</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/Home.js">Women</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/Home.js">Men</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/Home.js">Jewellery</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/Home.js">Shoes</Link>
          </li>
          <li>
              <Link className='text-decoration' href="/Home.js">Pages</Link>
          </li> */}
        </ul>
      </nav>
    
    </div>
  )
}
export default Header;
