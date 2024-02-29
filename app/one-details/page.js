import React from 'react'
import './one-details.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const One_details = () => {
  return (
    <div>
        <div>
            <div>Imag</div>
            <div>discription</div>
        </div>
        <div>
            <a  className='add-to-cart' href='cart'>Added to cart  |Go To Cart <ArrowForwardIcon/></a>
        </div>
        <div className='gap-div'></div>
        <div>Recommendations</div>

    </div>
  )
}

export default One_details;