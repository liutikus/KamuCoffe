import { useState } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import BackgroundImg from './Components/BackgroundImg'
import Info from './Info/Info'
import MenuPreview from './MenuPreview/MenuPreview'
import Menu from './MenuPreview/Menu/Menu'
import {menu} from './db/data.js'

function App() {
  

  return (
    <>
      <div>
      <BackgroundImg/>
      <Nav/>
      <Info/>
      <MenuPreview />
      <Menu menu={menu}/>
      </div>
    </>
  )
}

export default App
