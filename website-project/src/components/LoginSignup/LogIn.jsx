import React from 'react'
import { Link } from 'react-router';
import './LoginSignup.css'

export const LogIn = () => {
  return (
    <>
     <div className="signup-container">
        <h3 className='header'>Log In </h3>
        <div className="form-container">
          <div className='signup-form'>
            
            <input 
              type="text"
              placeholder='Enter your username'
              className='input-field'
           />
          
            <input
              type="password"
              placeholder='Enter your password'
              className='input-field'
           />

           <a href="#" className='login-link'>Forgot password?</a>
            
          </div>
          <div className="signup-button-container">
            <button className='signup-button'>Log In</button>
          </div>
          <div className="login-prompt">
            <p>Don't have an account? <Link to="/" className='login-link'>Sign In</Link></p>
          </div>
          
        </div>

      </div>
      </>
  );
}


