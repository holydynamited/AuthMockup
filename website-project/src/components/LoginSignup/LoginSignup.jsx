import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router';

export const LoginSignup = () => {
  return (
   
      <div className="signup-container">
        <h3 className='header'>Sign Up </h3>
        <div className="form-container">
          <div className='signup-form'>
            
            <input 
              type="text"
              placeholder='Enter your username'
              className='input-field'
           />
            <input 
              type="email"
              placeholder='Enter your email' 
              className='input-field'
           />
            <input
              type="password"
              placeholder='Enter your password'
              className='input-field'
           />
            
          </div>
          <div className="signup-button-container">
            <button className='signup-button'>Sign Up</button>
          </div>
          <div className="login-prompt">
            <p>Already have an account? <Link to="/login" className='login-link'>Log In</Link></p>
          </div>
          
        </div>

      </div>
    
  );
}

