import React, { useState } from 'react'
import "./AddEditNotes.css"
import TagInput from '../../components/Input/TagInput';
import { MdClose } from 'react-icons/md';

const AddEditNotes = ({noteData, type, onClose}) => {

  const [title, setTitle]=useState("");
  const [content, setContent]=useState("");
  const [tags, setTags]=useState([]);
  const[error, setError]=useState(null);

  //adding Note
  const addNewNote = async ()=>{
    
  }
  //editing note
  const editNote = async ()=>{

  }

  const handleAddNote =()=>{
    if(!title){
      setError("Please enter a title");
      return;
    }
    else if (!content) {
      setError("Note cannot be empty!")
      return;
    }
    setError("");
  }

  if (type==='edit') {
    editNote();
  }
  else{
    addNewNote();
  }

  return (

      
    <div className='overall-container'>
        <div className='title-container'>
            <label className='input-label'>TITLE</label>
            <button className='close-btn' onClick={onClose}>
        <MdClose className='close-icon'/>
      </button>
    
            <input type="text"
            className='input-title'
            placeholder='Your title' 
            value={title}
            onChange={({target})=>setTitle(target.value)}/>
        </div>
        <div className='note-container'>
            <label className='input-label'>CONTENT</label>
            <textarea type="text"
            className='input-content'
            placeholder='Your Content'
            rows={10}
            value={content}
            onChange={({target})=>setContent(target.value)}/>
        </div>
        <div className="tag-container">
          <label className='input-label'>TAGS</label>
          <TagInput tags={tags} setTags={setTags}/>
        </div>
        {error && <p className='error-message'>{error}</p>}
        <button className="addedit-btn" onClick={handleAddNote}>Add</button>
    </div>


  )
}

export default AddEditNotes;