import React from 'react'
import './project.css'

const ProjectSpecs = props => {

  return(
    <div className='project-specs'>
      <p><b>Front end</b><span>React.js</span></p>
      <p><b>Back end</b><span>Ruby on Rails</span></p>
      <p>See it <a href={props.link} rel='noreferrer' target='_blank'>live</a> or view the <a href='http://bridgetro.se' rel='noreferrer' target='_blank'>user stories</a>, or <a href={props.github} rel='noreferrer' target='_blank'>code</a>.</p>
      <p className='project-summary'>{props.text}</p>
    </div>
  )
}

export default ProjectSpecs