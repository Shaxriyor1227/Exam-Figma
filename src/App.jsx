import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Aboutfull from './components/Aboutfull/Aboutfull'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutfull />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App