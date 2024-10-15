import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "./Login.css"
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={()=>{}}>
          <h2 className="login-text">Login</h2>
          <input type="text" placeholder='Email' className='input-box' /> 
          <PasswordInput/>
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