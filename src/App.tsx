// import { useState } from 'react'
import './App.css'
import Achievements from './components/Achievements'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div className={"container"}>
    <Navbar/>
    <Hero/>
    <Achievements/>
    </div>
    </>
  )
}

export default App
