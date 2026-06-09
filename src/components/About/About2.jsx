import React from 'react'
import './About2.css'
import about2 from '../../assets/aboutimg2.png'
import { FaPlay } from "react-icons/fa6";
import { GrSelection } from "react-icons/gr";
import { GrMultimedia } from "react-icons/gr";
import { LuAlarmClock } from "react-icons/lu";
const About2 = () => {
  return (
    <div>
        <div className="about2-container">
            <div className="bacraound-img" style={{backgroundImage:`url(${about2})`}}>
              <div className="about-icon">
                 <p><FaPlay /></p>
              </div>
              <h1>Feel the authentic & original taste from us</h1>
            </div>
            <div className="about-card">
                <div className="multi">
                    <div className="about-icon2"><p><GrSelection /></p></div>
                 <div className='about-text2'>
                       <h3>Multi Cuisine</h3>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                 </div>

                </div>
                    <div className="multi">
                    <div className="about-icon2"> 
                        <p><GrMultimedia />
                        </p></div>
                   <div className="about-text2">
                     <h3>Easy To Order</h3>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                   </div>

                </div>

                     <div className="multi">
                    <div className="about-icon2"><p><LuAlarmClock /></p></div>
                   <div className="about-text2">
                     <h3>Fast Delivery</h3>
                    <p>In the new era of technology we look in the future with certainty life.</p>
                   </div>

                </div>
            </div>


            
        </div>
    </div>
  )
}

export default About2