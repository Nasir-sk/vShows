import React from 'react'
import IMAGES from '../images/Images'
import  '../App.css'
function TVShows() {
  return (
    <div>
    <div className="page-container">
      <img src={IMAGES.image4} alt="Home" className="full-screen-image" />
      <div className="top-shadow-overlay"></div>
    </div>
   </div>
  )
}

export default TVShows