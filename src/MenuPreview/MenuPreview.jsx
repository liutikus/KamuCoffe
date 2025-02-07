import React, { useState } from 'react'
import './MenuPreview.css'
import Button from '../Components/Button'
import * as motion from "motion/react-client"
import firstImage from '/MenuImages/firstmenuimage.webp'
import secondImage from '/MenuImages/secondmenuimage.webp'
import thirdImage from '/MenuImages/thirdmenuimage.jpeg'


const MenuPreview = ({handleReserveScroll,handleMenuScroll}) => {

  const [imagesMenu, setImageMenu] = useState([{
    img: firstImage,
    title: 'Brunch',
    text:'Gourmet dishes,crafted with the finest ingredients and masterful precision. ',
    id:'1',
    isActive: false,
  },{
    img: secondImage,
    title: 'Drink',
    text:'Artfully crafted cocktails, where premium spirits meet bold flavors and refined elegance',
    id: '2',
    isActive: false,


  },{
    img: thirdImage,
    title: 'Dinner',
    text:'A sophisticated evening of exquisite flavors, fine wine, and elegant ambiance.',
    id: '3',
    isActive: false,

  }])


  const handleHover = (id) => {
    setImageMenu((prevMenu) =>
      prevMenu.map((card) =>
        card.id === id
          ? { ...card, isActive: true }
          : { ...card, isActive: false }
      )
    );
  };

  const cursorLeave= ()=>{
      setImageMenu((prevMenu) => prevMenu.map(card => ({ ...card, isActive: false })))

  }

  return (
    <div>
      <div className="preview-menu-container">
        <div className="card-container">
        {imagesMenu.map(({img, title, text, id, isActive})=>(
            <div
            key={id}
            className="card">
              <div
               className="img-container"
              onMouseEnter={()=>handleHover(id)}
              onMouseLeave={cursorLeave}
               >
                <motion.img
                initial={{ opacity: 0, y:100, filter: `blur(0)`}}
                whileHover={{filter:'blur(5px'}}
                whileInView={{opacity: 1, y:0,
                  transition: {
                    delay:0.2,
                    duration: 0.6
                  }
                }}
                viewport={{once:true, amount:0.1}}
                src={img} alt="image" />
                {isActive?(

                <motion.div
                initial={{filter: 'blur(0px)'}}
                whileHover={{filter:'blur(2px)'}}
                className="btn-menu-preview-container">
                <Button
                    handleClick={handleMenuScroll}

                    text={`View Menu>`}
                    background={'#fafafa'}
                    color={'#32483e'}
                    hoverBackground={'#32483e'}
                    hoverColor={'#fafafa'}
                    borderColor={'#fafafa'}
                    />
                  </motion.div>
                ):''}

              </div>
                <p className="title">{title}.</p>
                <p className="text">{text}</p>
            </div>

            
        ))}
        
        </div>
      </div>
      <div className="btn-preview-menu">

                    <Button
                    handleClick={handleMenuScroll}
                    text={'View Menu'}
                    background={'#fafafa'}
                    color={'#32483e'}
                    hoverBackground={'#32483e'}
                    hoverColor={'#fafafa'}
                    borderColor={'#32483e'}
                    />

                    
                    <Button
                    handleClick={handleReserveScroll}
                    text={'Order >'}
                    background={'#fafafa'}
                    color={'#32483e'}
                    hoverBackground={'#32483e'}
                    hoverColor={'#fafafa'}
                    borderColor={'#fafafa'}
                    />

                    
                    </div>
    </div>
  )
}

export default MenuPreview
