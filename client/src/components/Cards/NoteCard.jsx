import React, { useState } from 'react'
import "./NoteCard.css"
import {MdOutlinePushPin, MdCreate, MdDelete} from 'react-icons/md'
import "../../../src/index.css"

const NoteCard = ({title, date, content, tags, isPinned, onEdit, onDelete, onPinNote}) => {


return (
<div className='card-container'>
    <div className='top-container'>
        <div className='title-date-container'>
        <h1 className='title'>{title}</h1>
        <span className='date'>{date}</span>
        </div>
        <div className='icons-container'>
            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-red-700': 'text-slate-700'}`} onClick={onPinNote} />
            <MdCreate className='edit-btn' onClick={onEdit} />
            <MdDelete className='delete-btn' onClick={onDelete} />
        </div>
    </div>
    <p className='content-container'>{content?.slice(0,30) + "....."}</p>
    <div className='tags-container'>
        <div>{tags}</div>
    </div>
</div>
)
} 

export default NoteCard