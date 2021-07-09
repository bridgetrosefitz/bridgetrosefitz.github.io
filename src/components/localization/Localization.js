import React from 'react'
import './localization.css'

const Localization = ({ changeLanguage }) => {

  return(
    <>
      <button onClick={() => changeLanguage('fr')}>Français</button>·
      <button onClick={() => changeLanguage('jp')}>日本語</button>·
      <button onClick={() => changeLanguage('en')}>English</button>
    </>
  )
}

export default Localization