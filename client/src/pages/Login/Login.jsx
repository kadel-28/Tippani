import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "./Login.css"
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'

const Login = () => {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email))
    {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password){
      setError("Please enter the password.");
      return;
    }

    setError("");

    //now we will call the login API.

  }

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <h2 className="login-text">Login</h2>
          <input type="text" placeholder='Email' className='input-box' 
            value={email} onChange={(e)=> setEmail(e.target.value)} //when changed, the email value is set to be the value in the input container
          /> 
          <PasswordInput 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <p className="error-message">{error}</p>
          <button type="submit" className="login-btn">Login</button>
          <p className="non-register">Not registered yet? 
            <Link to="/SignUp">.Create an Account.</Link>
          </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login;