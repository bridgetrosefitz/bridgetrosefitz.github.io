import React from 'react'
import Project from './Project'

const ProjectPhoto = props => {

  return(
    <div className='project-photo'>
      <img alt='Project snapshot' src={props.photos[0]}/>
    </div>
  )
}

export default ProjectPhoto