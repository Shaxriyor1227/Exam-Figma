import React from 'react'
import './About3.css'
import facts from '../../assets/facts.jpg'
const About3 = () => {
  return (
    <div>
        <div className="about-container3">
            <div className="about-text3">
                <div className="about-logo">
                <h1>A little information for our valuable guest</h1>
                <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
                 <div className="about-card3">
                    <div className="about-facts">
                        <h2>3</h2>
                        <p>Locations</p>
                    </div>

                       <div className="about-facts">
                        <h2>1995</h2>
                        <p>Founded</p>
                    </div>

                       <div className="about-facts">
                        <h2>65+</h2>
                        <p>Staff Members</p>
                    </div>

                     <div className="about-facts">
                        <h2>100%</h2>
                        <p>Satisfied Customers</p>
                    </div>
                 </div>

            </div>
            <div className="about-facts2">
                <img src={facts} alt="" />
            </div>

        </div>
    </div>
  )
}

export default About3