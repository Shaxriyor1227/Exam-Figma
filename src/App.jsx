import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App