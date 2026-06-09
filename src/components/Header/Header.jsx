import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>Bistro Bliss</h1>
            </div>

            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/pages">Pages</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>

            <NavLink to="/book" className="book-button">
                <button>Book A Table</button>
            </NavLink>
        </header>
    </div>
  )
}

export default Header