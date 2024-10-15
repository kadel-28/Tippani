import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={()=>{}}>
          <h4 className="login-text">Login</h4>
          <input type="text" placeholder='Email' className='input-box' />
          <button type="submit" className="login-btn">Login</button>
          <p className="non-register">Not registered yet? 
            <Link to="/SignUp">Create an Account.</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login