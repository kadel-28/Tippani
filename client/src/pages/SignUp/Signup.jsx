import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper';

const Signup = () => {

  const[name, setName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[error, setError]=useState("");

  const handleSignUp = async(e) => {

    e.preventDefault();

    if(!name){
      setError("Please enter your name");
      return;
    }

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
      //SignUp API call
  }

  

  return (
    <>
      <Navbar/>
      <div className="sign-up-container">
        <div className="form-container">
          <form onSubmit={handleSignUp}>
            <h2>SignUp</h2>
            <input type="text" placeholder='Name' className='input-box' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Email' className='input-box' 
            value={email} onChange={(e)=> setEmail(e.target.value)} //when changed, the email value is set to be the value in the input container
          />
            
          <PasswordInput value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
          <p className="error-message">{error}</p>
          <button type="submit" className="signup-btn">Create an Account</button>
          <p className="already-registered"> Already Registered? {"  "}
            <Link to="/Login">Go to Login.</Link>
          </p>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Signup;