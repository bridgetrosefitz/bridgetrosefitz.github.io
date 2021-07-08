import React from 'react';
import './project.css'
import { IoCloseOutline } from 'react-icons/io5'
import ProjectSpecs from './ProjectSpecs';
import ProjectPhoto from './ProjectPhoto';

const Project = ({hidden, onClose, project}) => {
  
  return (
    
    <>{project ? 
      (<div className={`${hidden ? 'hidden' : null} project`}>
        <h1>{project.title}
          <IoCloseOutline className='close-icon' onClick={onClose} />
        </h1>
        <div className='single-project-display-container'>
        <ProjectSpecs {...project}/>
        <ProjectPhoto {...project} />
        </div>
      </div>) : null
    }
    </>
  )
}

export default Project