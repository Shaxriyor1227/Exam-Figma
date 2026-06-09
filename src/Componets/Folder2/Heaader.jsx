import React from 'react'
import { Link } from 'react-router-dom'
import './Heaader.css'
const Heaader = () => {
  return (
    <div>
        <header>
            <div className="header-container">
                <h1>Bistro Blis</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="btn">
                    <button>Login</button>
                </div>
            </div>
        </header>

    </div>
  )
}

export default Heaader