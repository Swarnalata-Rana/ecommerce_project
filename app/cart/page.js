import React from 'react'
import './cart.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Cart= () => {
  return (
    <div>
        
        <div class='header'>
            <h3 className='catarory'>My Cart</h3>
            <p className='paragrap'>All the products you added to purchase appears here.</p>
        </div>
        <div className='img-div'>
          <div className='img'>First IMG</div>
            <hr></hr>
            <div className='img'>Second IMG</div>
            <hr></hr>
            <div className='img'>Third IMG</div>
            <hr></hr>
        </div>
        <div className='proceed-to-buy'>
            <a className='buy' href='/delivery'>Proceed to Buy <ArrowForwardIcon/></a>
        </div>        
        <div className='gap-div'></div>

    </div>
  )
}

export default Cart;