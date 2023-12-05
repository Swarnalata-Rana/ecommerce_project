import React from 'react'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <div>
        <div className=''>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="women">Women</a>
                    <a class="navbar-brand" href="men">Men</a>
                    <a class="navbar-brand" href="jewellery">Jewellery</a>
                    <a class="navbar-brand" href="shoes">Shoes</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">  
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}
export default Home;