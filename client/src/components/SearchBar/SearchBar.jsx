import React from 'react'
import {FaMagnifyingGlass} from "react-icons/fa6"
import {IoMdClose} from "react-icons/io"
import "./SearchBar.css"

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {



  return (
    <div className='searchbar-container'>
        <input type="text" placeholder='Search Notes' className='search-bar'  value={value} onChange={onChange}/>

        {value && (<IoMdClose className='clear-search' onClick={onClearSearch}/>)}
    
        <FaMagnifyingGlass className='magnifying-glass' onClick={handleSearch}/>
    </div>
    

  )
}

export default SearchBar;