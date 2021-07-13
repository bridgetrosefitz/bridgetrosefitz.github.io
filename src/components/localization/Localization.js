import React from 'react'
import './localization.css'

const Localization = ({ changeLanguage, currentLanguage }) => {

  switch (currentLanguage) {
    case 'en':
      return (
        <div className='localization-buttons'>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      )
      break
    case 'fr':
      return (
        <div className='localization-buttons'>
          <button onClick={() => changeLanguage('en')}>English</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>
        </div>
      )
      break
    case 'jp':
      return (
        <div className='localization-buttons'>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      )
      break
    default:
      return (
        <div className='localization-buttons'>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>·
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
      )
      break
  }
  
}

export default Localization