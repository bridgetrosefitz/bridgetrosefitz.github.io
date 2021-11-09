import React from 'react'
import './localization.css'

const Localization = ({ changeLanguage, currentLanguage }) => {

  switch (currentLanguage) {
    case 'en':
      return (
        <div className="localization-container">
          <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
          <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      )
    case 'fr':
      return (
        <div lassName="localization-container">
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>·
          <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      )
    case 'jp':
      return (
        <div lassName="localization-container">
          <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>
        </div>
      )
    default:
      return (
        <div className="localization-container">
          <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
          <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>·
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>
        </div>
      )
  }
  
}

export default Localization