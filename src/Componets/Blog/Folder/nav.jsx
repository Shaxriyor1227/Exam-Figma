import React from 'react'
import { CiPhone } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


const Nav = () => { 
  return (
    <div>
      <div className="nav-container">
            <div className="nav-item">
                <CiPhone />
                <span>(414) 857 – 0107</span>
                <span>yummy@bistrobliss.com</span>
            </div>
            
            <div className="nav-item">
                <CiTwitter />
                <FaFacebookF />
                <IoLogoInstagram />
                <FaGithub />                   
            </div> 
        </div>
    </div>
  )
}

export default Nav
