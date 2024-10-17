import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>

      <div>
        <NoteCard/>
      </div>
    </>
  )
}

export default Home 