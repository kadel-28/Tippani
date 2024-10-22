import React, { useState } from 'react'
import "./TagInput.css"
import {MdAdd, MdClose} from "react-icons/md"

const TagInput = ({tags, setTags}) => {

  const [inputValue, setInputValue]=useState("");

  const handleInputChange =(e)=> {
    setInputValue(e.target.value);
  }

  const addNewtag =()=>{
    if (inputValue.trim() !==""){
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  }

  const handleKeyDown=(e)=>{
    if (e.key ==="Enter"){
      addNewtag();
    }
  }

  const handleRemoveTag=(tagToRemove)=>{
    setTags(tags.filter((tag)=> tag!== tagToRemove));
  }

  return (
    <div className='display-tag-container'>
      {tags?.length >0 &&
        (<div className='display-tags'>
          {tags.map((tag, index)=>(
            <span key={index} className='show-tags'>
              # {tag}
              <button 
              className='delete-tag-btn'
              onClick={()=>{handleRemoveTag(tag)}}>
                <MdClose/>
              </button>
            </span>
          ))}
        </div>)
      }

        <div className='tags-input-container'>
            <input type="text" className='tag-input' placeholder='Enter your tag'
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}/>
            <button className='create-btn' onClick={()=> {
              addNewtag();
            }}>
                <MdAdd className="add-tag-btn"/>
            </button>
        </div>
    </div>
  )
}

export default TagInput