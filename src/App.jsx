import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Header from './Components/Header'
import Education from './Components/Education'
import Achievements from './Components/Achievements'
import Project from './Components/Project'
import ExPerience from './Components/ExPerience'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/Header' element={<Header/>} />
        <Route path='/' element={<About/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Achievements' element={<Achievements/>}/>
        <Route path='/Projects' element={<Project/>}/>
        <Route path='/ExPerience' element={<ExPerience/>}/>
      </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
