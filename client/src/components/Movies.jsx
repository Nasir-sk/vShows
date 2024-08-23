import React from 'react'
import IMAGES from '../images/Images'
import  '../App.css'
function Movies() {
  return (
    <div>
    <div className="page-container">
      <img src={IMAGES.image2} alt="Home" className="full-screen-image" />
      <div className="top-shadow-overlay"></div>
    </div>
   </div>
  )
}

export default Movies