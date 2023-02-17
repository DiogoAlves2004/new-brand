import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import SobreNos from './pages/sobre_nos/Sobre_nos'
import Squad from './pages/squad/Squad'
import Navbar from './components/navbar/Navbar'
import Contact from './pages/contact/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <SobreNos />
      <Portfolio />
      <Squad />
      <Contact />
    </div>


  )
}

export default App
