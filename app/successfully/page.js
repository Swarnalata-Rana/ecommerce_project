import React from 'react';
import './successfully.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const Successfully = () => {
  return (
    <div className='main-div'>
        <div className='check-round'><CheckIcon/>
            {/* <input value = "One" type = "checkbox" />  */}
        </div>
        <div className='oder-placed'>Order Successfully Placed</div>
        <p className='gmail-p'>Track Details on your email-id<br></br>swarnalatarana21@navgurukul.org</p>
        <div className='continue'>
            <a className='ountinue-sopping'>Continue Shopping <ArrowForwardIcon/></a>
            <div className='gap-div-lower'></div>
        </div>
    </div>
  )
}
export default Successfully