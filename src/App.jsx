import React, { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Projects from './components/Projects'

export default function App() {
  return (
    <div>
      <div className="fixed -z-10 min-h-screen w-full absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

