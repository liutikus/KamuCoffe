import React from 'react'
import './Nav.css'
import Button from '../Components/Button'


const Nav = ({innerRef, handleReserveScroll}) => {
  return (
    <div ref={innerRef}>
      <div className="nav-container">
        <ul>
            <p className='logo'>Kamu & <br/><span>Coffee</span></p>
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Contact Us</li>
            <div 
            className='btn-nav' >

            <Button
            handleClick={handleReserveScroll}
            text={'Reserve'}
            background={'white'}
            color={'black'}
            hoverBackground={'none'}
            hoverColor={'white'}
            borderColor={'white'}
            />
            </div>
        </ul>
      </div>
    </div>
  )
}

export default Nav
