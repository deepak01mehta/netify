import React from 'react'
import './Login.css'
import netifylogo from '../../../assets/netifylogo.png'
const Login = () => {
  return (
    <div className='login'>
      <img src= {netifylogo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>Sign UP</h1>
        <form >
             <input type="text" placeholder='Your Name' />
             <input type="email" placeholder='Your Email' />
             <input type="password" placeholder='Password' />
             <button>Sign Up</button>
             <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label >Remember Me</label>
              </div>
              <p>Need Help?</p>
             </div>


        </form>
      </div>
    </div>
  )
}

export default Login