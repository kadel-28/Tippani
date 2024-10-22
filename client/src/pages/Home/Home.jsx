import React, { useState } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import {MdAdd} from "react-icons/md"
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'


const Home = () => {

  const [openAddEditModal, setOpenAddEditModal]=useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar/>

      <div className='notes-container'>
        <div className="notecard">
        <NoteCard 
        title="Meeting" 
        date="3rd April 2024" 
        content="sdfghfjdsdfwfewgweifhbifuhoiwefhcnofipqwiehfbiwevfhoeiwnfuopeiufhpv;lofinhwievfu
        sajnckjscnkasjnckjcksjdcjs dkjvkSJDVljdkvjkdjc jksdsNDDjkjvDSKJV DIKEWNFOIQWENFELEKNCLKDL" 
        tags="#meeting" 
        isPinned={true} 
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
        />
        </div>
      </div>

      <button className='add-btn' onClick={()=>{
        setOpenAddEditModal({isShown:true, type: "add", data:null,});
      }}>
        <MdAdd className="add-icon"/>
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
          overlay:{
            backgroundColor: "rgba(0,0,0,0.2)"
          },
        }}
        contentLabel=""
        className="modal-container"
      >
        <AddEditNotes 
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={()=> {
          setOpenAddEditModal({isShown: false, type: "add", data:null})
        }}/>
      </Modal>

      

    </>
  )
}



export default Home; 