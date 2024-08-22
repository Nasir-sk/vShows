import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Navbar() {
    const {t} = useTranslation();
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-left'>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>{t('Home')}</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/movies"><li>{t('Movies')}</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/tv-shows"><li>{t('TV Shows')}</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/sports"><li>{t('Sports')}</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/live"><li>{t('Live')}</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/settings"><li>{t('Settings')}</li></NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar