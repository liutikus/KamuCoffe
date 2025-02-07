import React from 'react'
import './Info.css'
import * as motion from "motion/react-client"
import Button from '../Components/Button'


const Info = () => {
  return (
    <div>
      <div
      
      className="info-container">
      <motion.p
      viewport={{once: true}}
      initial={{opacity: 0}}
      whileInView={{opacity:1,
        transition: {delay:0.5, duration: 1.5}
      }}
    
      className='main-text'>A Symphony of Flavors,<br/> Crafted to Perfection</motion.p>
      <motion.p
      viewport={{once: true}}
      initial={{opacity: 0}}
      whileInView={{opacity:1,
        transition: {delay:1.5, duration: 1.5}
      }}
    
      >Step into a world where culinary artistry meets unparalleled elegance.<br/>
      Each dish is a masterpiece, meticulously crafted with the <br/>finest ingredients to captivate your palate.
      </motion.p>
      <motion.div
      viewport={{once: true}}
       initial={{opacity: 0}}
       whileInView={{opacity:1,
         transition: {delay:2.5, duration: 0.5}}}
        className="btn-container">
      <Button
       text={'Reserve'}
       background={'white'}
       color={'black'}
       hoverBackground={'none'}
       hoverColor={'white'}
       borderColor={'white'}

       />
      <Button
          text={'Order'}
          background={'none'}
          color={'white'}
          hoverBackground={'white'}
          hoverColor={'black'}
          borderColor={'white'}
      />

       

      </motion.div>
      </div>
    </div>
  )
}

export default Info
