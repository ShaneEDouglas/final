import React from 'react'
import OliviaImage from '../images/olivia.jpeg';



const Topbar = () => {
  return (
    <div className="topbar">
       <img src = {OliviaImage} alt="Olivia" />
       <p>Hey, my name is Olivia and I will be your assistant today.</p>

      </div>
  )
}

export default Topbar;