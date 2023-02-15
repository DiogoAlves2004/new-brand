import { useState } from 'react'

import './App.css'
import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import SobreNos from './pages/sobre_nos/Sobre_nos'

function App() {

  return (
    <div>
      <Home />
      <SobreNos />
      <Portfolio />
    </div>


  )
}

export default App
