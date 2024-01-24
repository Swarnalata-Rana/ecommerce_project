import React from 'react';
import './delivery.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const Delevery_form = () => {
  return (
    <div className=''>
        <div class='header'>
                <h3 className='catarory'>ADD DELIVERY DETAILS</h3>
                <p className='paragrap'>Add the details below.</p>
        </div>
        <div className='form-div'>
            <div className='heding-div'>Your Email Address
                <p className='paragrap-p-tag'>All details of purchase, also tracking details will be send here.</p>
                <input className='input-tag' type="text"/>
            </div>
            <div className='heding-div'>Name of the Receiver
                <p className='paragrap-p-tag'>The delivery will be in this Name</p>
                <input className='input-tag' type="text"/>
            </div>
            <div className='heding-div'>Contact Number of the Receiver
                <p className='paragrap-p-tag'>Our Delivery Guy may need this, to contact</p>
                <input className='input-tag' type="text"/>
            </div>
            <div className='heding-div'>Delivery Address
                <p className='paragrap-p-tag'>The products will be delivered here in 15- 20 days.</p>
                <div>Pin Sode</div>
                <input className='input-tag' type="text"/>
                <div>Address </div>
                
                <input className='input-tag' type="text"/>
                <div>Town / City</div>
                <input className='input-tag' type="text"/>
            </div>
            <div className='gap-div-1'>
                <a className='complete-purchase' href='/successfully'  >Complete Purchase</a>
            </div>
            <div className='gap-div'></div>
        </div>
    </div>
  )
}

export default Delevery_form;