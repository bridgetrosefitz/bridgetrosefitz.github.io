import React, { useState } from 'react'
import './mock-browser.css'

const MockBrowser = ({image, altText}) => {
  
  return(
      <div className='mock-browser-outline'>
        <div className='mock-browser-top'>
        {/* <div className='mock-browser-circles-container'> */}
            <div className='mock-browser-circle'></div>
            <div className='mock-browser-circle'></div>
            <div className='mock-browser-circle'></div>
        {/* </div> */}
          
        </div>
        <img className='project-image' alt={altText} src={image} />

      </div>
  )

}

export default MockBrowser