import React from 'react'
import './FooterContact.css'
import { FaInstagram,FaFacebookF } from "react-icons/fa6";
import * as motion from "motion/react-client"


const FooterContact = ({innerRef}) => {
  return (
    <div ref={innerRef}>
      <div className="footer-container">
        <p>To Order or<br/> Reserve Call: 834-4750-9631</p>
        <p className='icons'>
            <motion.a
             href='https://www.instagram.com/'
            target='_balnk'
            whileHover={{scale: 0.9}}
            whileTap={{scale:0.8}}
            ><FaInstagram/></motion.a>
            <motion.a
            href='https://www.facebook.com/'
            target='_balnk'
              whileHover={{scale: 0.9}}
              whileTap={{scale:0.8}}
            ><FaFacebookF/></motion.a></p>
      </div>
    </div>
  )
}

export default FooterContact
