import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Header from './Components/Header'
import Education from './Components/Education'
import Achievements from './Components/Achievements'
import Project from './Components/Project'
import Gallery from './Components/Gallery'
import Experience from './Components/Experience'

function App() {

  return (
    <>
   
      <Routes>
        <Route path='/Header' element={<Header/>} />
        <Route path='/Harshal_Portfolio' element={<About/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Achievements' element={<Achievements/>}/>
        <Route path='/Projects' element={<Project/>}/>
        <Route path='/Experience' element={<Experience/>}/>
      </Routes>
  
      
    </>
  )
}

export default App
