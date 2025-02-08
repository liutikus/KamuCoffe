import { useRef, useState } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import BackgroundImg from './Components/BackgroundImg'
import Info from './Info/Info'
import MenuPreview from './MenuPreview/MenuPreview'
import Menu from './MenuPreview/Menu/Menu'
import {menu} from './db/data.js'
import FooterContact from './FooterContact/FooterContact.jsx'

function App() {
  
  const homeRef = useRef(null)
  const menuRef = useRef(null)
  const contactRef = useRef(null) 

  const handleClickScroll = (sectionRef)=>{
    sectionRef.current?.scrollIntoView({behavior: 'smooth'});
    console.log('sadfsdaf')
  }

  return (
    <>
      <div>
      <BackgroundImg/>
      <Nav innerRef={homeRef} 
      handleReserveScroll={()=> handleClickScroll(contactRef)}
      handleMenuScroll={()=> handleClickScroll(menuRef)}
      handleHomeScroll={()=>handleClickScroll(homeRef)}
      />
      <Info
      handleReserveScroll={()=> handleClickScroll(contactRef)}
      handelMenuScroll={()=> handleClickScroll(menuRef)}
      />
      
      <MenuPreview
        handleReserveScroll={()=> handleClickScroll(contactRef)}
        handleMenuScroll={()=> handleClickScroll(menuRef)}
      />
      <Menu menu={menu}
      innerRef={menuRef}
      />
      <FooterContact innerRef={contactRef}/>
      </div>
    </>
  )
}

export default App
