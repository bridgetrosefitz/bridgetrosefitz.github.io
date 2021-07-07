import React from 'react'
import './project.css'

const ProjectSpecs = props => {

  return(
    <div className='project-specs'>
      <p><b>Front end:</b><span>React.js</span></p>
      <p><b>Back end:</b><span>Ruby on Rails</span></p>
      <p>View the <a href='http://bridgetro.se'>user stories</a>, or <a href='http://bridgetro.se'>code</a>.</p>
      <p className='project-summary'>{props.project.text}</p>
    </div>
  )
}

export default ProjectSpecs