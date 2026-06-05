import React from 'react'
import "./Main.css";
import mainImg from "../../assets/main.png";
const Main = () => {
  return (
    <div>
        <main>
            <h1>Best food for your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
            <div className="main-btn">
                <button>Book A Table</button>
                <button>Explore Menu</button>
            </div>
        </main>
    </div>
  )
}

export default Main