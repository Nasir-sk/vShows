import React from 'react'
import IMAGES from '../images/Images'
import  '../App.css'
function Live() {
  return (
    <div>
    <div className="page-container">
      <img src={IMAGES.image1} alt="live" className="full-screen-image" />
      <div className="top-shadow-overlay"></div>
    </div>
   </div>
  )
}

export default Live