import React, { useState } from 'react'
import "./Navbar.css"
import ProfileInfo from '../Cards/ProfileInfo'
import { Navigate, useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'


const Navbar = () => {

  const [searchQuery, setSearchQuery]=useState("");

  const navigate = useNavigate;

  const handleLogout =()=>{
    navigate("/Login");
  }

  const handleSearch =()=>{

  }

  const onClearSearch=()=>{
    setSearchQuery("");
  }

  return (
    <div className="navbar-container">
        <p className="navbar-heading">टिप्पणी</p>  {/* Navbar text component */}

        <SearchBar value={searchQuery} 
          onChange={({target})=> {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogout={handleLogout}/>

    </div>
  )
}

export default Navbar