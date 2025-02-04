import { useState } from 'react'
import './App.css'
import Nav from './Nav/Nav'
import BackgroundImg from './Components/BackgroundImg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BackgroundImg/>
      <Nav/>
      </div>
    </>
  )
}

export default App
