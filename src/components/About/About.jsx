import React from 'react'
import './About.css'
import about from '../../assets/aboutimg.png'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
const About = () => {
  return (
    <div>
       <div className="about-container">
        <div className="left-img">           
    <img src={about} alt="" />
           <div className="come-us">
            <h3>Come and visit us</h3>

            <p> <IoCallOutline  style={{fontSize:'22px'}}/> (414) 857 - 0107</p>
            <p><MdOutlineMail   style={{fontSize:'22px'}}/>happytummy@restaurant.com</p>
            <p><TiLocationOutline  style={{fontSize:'38px'}} />837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
        </div>

        </div>
   
       <div className="about-text">
        <h1>We provide healthy food for your family.</h1>

        <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
       </div>
       </div>
    </div>
  )
}

export default About