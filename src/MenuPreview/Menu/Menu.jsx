import React, { useState } from "react";
import "./Menu.css";
import * as motion from "motion/react-client";

const Menu = ({ menu, innerRef }) => {


  const [menuTabs, setMenuTabs] = useState([
    {
      title: "Brunch",
      isActive: false,
      id: 1,
    },
    {
      title: "Lunch",
      isActive: false,
      id: 2,
    },
    {
      title: "Dinner",
      isActive: false,
      id: 3,
    },
    {
      title: "Drinks",
      isActive: true,
      id: 4,
    },
  ]);

  const handleClick = (id) => {
    setMenuTabs((prevTab) => {
      return prevTab.map((tab) => {
        if (tab.id === id) {
          return { ...tab, isActive: true };
        } else {
          return { ...tab, isActive: false };
        }
      });
    });
  };

  return (
    <div ref={innerRef} className="main-menu-container">
      <div className="menu-info-switch-container">
        <motion.div
         initial={{ opacity: 0, y:50}}
         whileInView={{opacity: 1, y:0,
           transition: {
             delay:0.2,
             duration: 0.6
           }
         }}
         viewport={{once:true, amount:0.1}}
        className="menu-container">
          {menuTabs.map(({ title, isActive, id }) => (
            <div className="menu-tab" key={id}>
              <motion.button
                onClick={() => handleClick(id)}
                style={{
                  backgroundColor: isActive ? "#32483e" : "#fafafa",
                  color: isActive ? "#fafafa" : "#32483e",
                }}
                whileHover={{ borderColor: "#32483e" }}
                whileTap={{ scale: 0.9 }}
              >
                {title}
              </motion.button>
            </div>
          ))}
        </motion.div>
        {menuTabs.map(tab=>(
            tab.isActive ? (
                menu.map(({title, quote, items, id})=>(
                    tab.title === title ? (
                        <motion.div 
                        key={id} 
                        initial={{ opacity: 0, filter: 'blur(5px)',}}
                        animate={{ opacity: 1, filter: 'blur(0px)',  }}
                        transition={{
                            duration: 0.5,
                            scale: { type: "smooth", visualDuration: 0.4, },
                        }}
                        className="menu-info-container">
                        <p>{title}</p>
                        <p className="menu-quote">{quote}</p>
                            {items.map(({title, ingredients})=>(
                        <p key={title}
                        className="menu-text">
                                
                          <span>{title}- </span>
                          {ingredients}
                        </p>
                        ))}
                      </motion.div>
                    ): null
                ))
            ) :null
        ))}
    
      </div>
      <div className="image-menu-container">
      {menuTabs.map(tab=>(
            tab.isActive ? (
                menu.map(({title, image, id})=>(
                    tab.title === title ? (
                      
                      <motion.img
                      key={id}
                      initial={{ opacity: 1, filter: 'blur(5px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)'  }}
                      transition={{
                          duration: 0.5,
                          scale: { type: "smooth", visualDuration: 0.4, },
                      }}
                      src={image} alt="img" />
                           
                      
                    ): null
                ))
            ) :null
        ))}
    </div>
    </div>
  );
};

export default Menu;
