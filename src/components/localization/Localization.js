import React from 'react'
import './localization.css'

const Localization = ({ changeLanguage, currentLanguage }) => {

  let buttons

  switch (currentLanguage) {
    case 'en':
    case 'en-US':
        buttons = (
          <>
            <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
            <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>
          </>
        )
        break;
    case 'fr':
        buttons = (
          <>
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>·
          <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>
          </>
      )
      break;
    case 'jp':
      buttons = (
        <>
          <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>
        </>
      )
      break;
    default:
      buttons = (
        <>
          <button className='localization-button' onClick={() => changeLanguage('fr')}>Français</button>·
          <button className='localization-button' onClick={() => changeLanguage('jp')}>日本語</button>·
          <button className='localization-button' onClick={() => changeLanguage('en')}>English</button>
        </>
      )
  }

  return (<div className='localization-container'>{buttons}</div>)
  
}

export default Localization