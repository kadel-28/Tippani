import React, { useState } from 'react'
import "./PasswordInput.css"
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const PasswordInput = ({value, onChange, placeholder}) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword =()=> {
        setIsShowPassword(!isShowPassword);
    }

  return (
    <div className='password-container'>
        
        <input className='password-input'
        value={value} onChange={onChange} type={isShowPassword ? "text" : "password"} placeholder={placeholder || "Password"} ></input>
    {isShowPassword? (<FaRegEye 
        size={22}
        className="eye-design"
        onClick={()=> toggleShowPassword()}
    />):(
        <FaRegEyeSlash 
        size={22}
        className="eye-design"
        onClick={()=> toggleShowPassword()}
    />
    )}
    </div>
  )
}

export default PasswordInput