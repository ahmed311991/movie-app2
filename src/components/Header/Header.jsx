import React from 'react'
import './Header.css'
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md"

function Header() {
  return (
    <div className="header-container">
      <p className="logo">MovieFanatic</p>
      <div className="search-container">
       <input type="text" className="search-input" placeholder="search movies ..."/>
      </div>

      <div className="header-buttons-container">
         <div className="theme-buttons-container">
         <div className="theme-buttons">
          
          <MdOutlineLightMode className = "theme-icon"/>
          <MdOutlineDarkMode className = "theme-icon theme-icon-active" />
         </div>
         </div>
      </div>

    </div>
  )
}

export default Header
