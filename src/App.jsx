import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/Contact/Contact'
import { Routes, Route } from 'react-router-dom'

import Aboutfull from './components/Aboutfull/Aboutfull'
import Book from './components/Book/Book'
import Menu from './components/Menu/Menu'
import Pizza from './components/Pizza/Pizza'
import Blog from './components/Blog/Blog'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutfull />} />
        <Route path="/book" element={<Book />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App