import React from 'react';
import './project.css'
import { IoCloseOutline } from 'react-icons/io5'
import ProjectSpecs from './ProjectSpecs';

const Project = ({hidden, onClose, project}) => {
  
  return (
    <div className={`${hidden ? 'hidden' : null} project`}>
      <h1>{project.title}
        <IoCloseOutline className='close-icon' onClick={onClose} />
      </h1>
      <ProjectSpecs project={project}/>
    </div>
  )
}

export default Project