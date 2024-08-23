import i18next from 'i18next';
import React from 'react'
import IMAGES from '../images/Images'
import  '../App.css'
function Settings() {

  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }
  return (
    <div>   
    <div className="settings">
    <h2>Settings</h2>
    <div>
      <label htmlFor="language">Language: </label>
      <select id="language" onChange={(e) => handleClick(e)}>
        <option value={"en"}>English</option>
        <option value={"fren"}>French</option>
        <option value={"ger"}>German</option>
        <option value={"rus"}>Russian</option>
        <option value={"span"}>Spanish</option>
        <option value={"chi"}>Chinese</option>
      </select>
    </div>
  </div>
  <div>
    <div className="page-container">
      <img src={IMAGES.image5} alt="Home" className="full-screen-image" />
      <div className="top-shadow-overlay"></div>
    </div>
   </div>
  </div>

  )
}

export default Settings