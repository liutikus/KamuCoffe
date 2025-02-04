import React from 'react'
import './Nav.css'
import * as motion from "motion/react-client"

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <ul>
            <p className='logo'>Kamu & <br/><span>Coffee</span></p>
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Contact Us</li>
            <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            >Reserve</motion.button>
        </ul>
      </div>
    </div>
  )
}

export default Nav
