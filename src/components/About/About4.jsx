import React from 'react'
import './About4.css'
import user1 from '../../assets/aboutuser1.png'
import user2 from '../../assets/aboutuser2.png'
import user3 from '../../assets/user3.png'

const About4 = () => {
  return (
    <div>
        <div className="about-container4">
            <div className="about-logo2">
                <h1>What Our Customers Say</h1>
            </div>
            <div className="about-user">
                <div className="about-user1">
                 <div className="about-usertext">
                       <h3>“The best restaurant”</h3>
                    <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                 </div>
                 <div className="x"></div>
                 <div className="about-img4">
                    <img src={user1} alt="" />
                    <div className="img-text">
                        <h4>Sophire Robson</h4>
                        <p>Los Angeles, CA</p>
                    </div>
                 </div>
               
                </div>

         <div className="about-user1">
                 <div className="about-usertext">
                       <h3>“Simply delicious”</h3>
                    <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                 </div>
                 <div className="x"></div>
                 <div className="about-img4">
                    <img src={user2} alt="" />
                    <div className="img-text">
                        <h4>Matt Cannon</h4>
                        <p>San Diego, CA</p>
                    </div>
                 </div>
               
                </div>


                         <div className="about-user1">
                 <div className="about-usertext">
                       <h3>“One of a kind restaurant”</h3>
                    <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of evening. Highly recommended.</p>
                 </div>
                 <div className="x"></div>
                 <div className="about-img4">
                    <img src={user3} alt="" />
                    <div className="img-text">
                        <h4>Andy Smith</h4>
                        <p>San Francisco, CA</p>
                    </div>
                 </div>
               
                </div>

            </div>
        </div>
    </div>
  )
}

export default About4