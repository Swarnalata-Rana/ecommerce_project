import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
const Login = () => {
  return (
    <>
        <div className='login_1'>
            <h1>Login Form</h1>
            <div className='login_2'>
                <button className='login_google'><GoogleIcon/>Google</button>
                <button className='login_facebook'><FacebookIcon/>Facebook</button>
                <div className=''>
                    <input className='login_mail' type="text" placeholder='Email or Phone'/>
                </div>
                <div className=''>
                    <input className='login_password' type="text" placeholder='Password'/>
                </div>
                <form className=''>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="remember"> Remember Me 
                        <a href=''>
                            Forget Password?
                        </a>
                    </label>
                </form>
                <button className=''>Login</button>
                <p className='login_account'>Not a Member ? 
                    <a href=''> Signup Now</a>
                </p>
                
            </div>
        </div>
    </>
  )
}

export default Login;