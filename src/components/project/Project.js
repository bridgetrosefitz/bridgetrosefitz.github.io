import React from 'react';
import './project.css'
import { IoCloseOutline } from 'react-icons/io5'

const Project = ({hidden, onClose, project}) => {
  
  return (
    <div className={`${hidden ? 'hidden' : null} project`}>
      <h1>{project.title}</h1>
      <IoCloseOutline className='close-icon' onClick={onClose}/>
      <p>
        <b>Front end:</b><span>React.js</span>
        <b>Back end:</b><span>Ruby on Rails</span>
        <span>View the website <a href='http://bridgetro.se'>here</a></span>
        <span>View user stories <a href='http://bridgetro.se'>here</a></span>
        <span>View the code <a href='http://bridgetro.se'>here</a></span>
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
      in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Project