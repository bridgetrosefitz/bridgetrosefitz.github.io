import React from 'react'

const ProjectPhoto = props => {

  return(
    <div className='project-photo'>
      <img alt='Project snapshot' src={props.photos[0]}/>
    </div>
  )
}

export default ProjectPhoto