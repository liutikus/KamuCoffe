import React, { useState } from 'react'
import * as motion from "motion/react-client"

const Button = ({text, background, color, hoverBackground, hoverColor, borderColor, handleClick}) => {




  return (
    <div style={{display:'inline'}}>
      <motion.button 
      onClick={handleClick}
       whileHover={{ background: hoverBackground, color: hoverColor }}
       whileTap={{ scale: 0.9 }}
      style={{
        cursor: 'pointer',
        background: background,
        color:color,
        fontSize: 16,
        borderStyle: 'none',
        padding: '1em',
        borderRadius:10,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:borderColor
      }}>{text}</motion.button>
    </div>
  )
}

export default Button
