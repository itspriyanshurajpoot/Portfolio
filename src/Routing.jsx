import React from 'react'
import { Route, Routes } from 'react-router'
import App from './App'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'

const Routing = () => {
  return (
    <div className='w-full bg-[#1E1E1D] min-h-screen mx-auto text-white'>
      <div className='flex flex-col gap-10 md:gap-30 w-full max-w-[1400px] mx-auto min-h-screen border border-gray-100'>
        <Navbar />
        <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default Routing