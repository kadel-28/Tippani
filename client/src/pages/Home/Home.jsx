import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'


const Home = () => {
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
    </>
  )
}



export default Home 