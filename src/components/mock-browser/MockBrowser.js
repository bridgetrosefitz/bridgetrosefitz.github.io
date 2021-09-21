import React, { useState } from 'react'
import './mock-browser.css'

const MockBrowser = ({image, altText}) => {
  
  return(
      <div className='mock-browser-outline'>
        <div className='mock-browser-top'>
            <div className='mock-browser-circle'></div>
            <div className='mock-browser-circle'></div>
            <div className='mock-browser-circle'></div>
        </div>
        { image.split(".")[1] === 'png' ? (
          <img 
            className='project-image' 
            alt={altText} 
            src={image} />) : (
          <video
            className='project-video' 
            controls
            playsInline
            muted
            autoPlay>
          <source 
            src={image}
            type="video/mp4"/>
            Sorry, your browser doesn't support embedded videos.
          </video>)
          }
      </div>
  )

}

export default MockBrowser