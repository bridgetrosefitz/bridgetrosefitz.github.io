import React from 'react'
import './localization.css'

const Localization = ({ changeLanguage, currentLanguage }) => {


  switch (currentLanguage) {
    case 'en':
      return (
        <>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>
        </>
      )
      break
    case 'fr':
      return (
        <>
          <button onClick={() => changeLanguage('en')}>English</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>
        </>
      )
      break
    case 'jp':
      return (
        <>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('en')}>English</button>
        </>
      )
      break
    default:
      return (
        <>
          <button onClick={() => changeLanguage('fr')}>Français</button>·
          <button onClick={() => changeLanguage('jp')}>日本語</button>·
          <button onClick={() => changeLanguage('en')}>English</button>
        </>
      )
      break
  }
  
}

export default Localization