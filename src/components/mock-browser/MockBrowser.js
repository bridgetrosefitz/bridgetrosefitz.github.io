import React, { useState } from 'react'
import './mock-browser.css'

const MockBrowser = ({image, altText}) => {
  
  return(
    <div className='mock-browser-outline'>
      <img className='project-image' alt={altText} src={image} />

    </div>
  )

}

export default MockBrowser