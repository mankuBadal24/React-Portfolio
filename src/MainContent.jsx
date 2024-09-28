import React from 'react'
import { Navbar } from './navbar/navbar'
import './MainContent.css'

import { Routes,Route } from 'react-router-dom'
import { Resume } from './resume/resume'
import { About } from './about/about'
import { Portfolio } from './portfolio/portfolio'


export const MainContent = () => {
  return (
    <div className="main-content">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
    </div>
  )
}
