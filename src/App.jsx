import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import SobreNos from './pages/sobre_nos/Sobre_nos'
import Squad from './pages/squad/Squad'

function App() {

  return (
    <div>
      <Home />
      <SobreNos />
      <Portfolio />
      <Squad />
    </div>


  )
}

export default App
