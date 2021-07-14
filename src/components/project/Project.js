import React from 'react';
import './project.css'
import { IoCloseOutline } from 'react-icons/io5'
import ProjectSpecs from './ProjectSpecs';
import ProjectPhoto from './ProjectPhoto';
import { useTranslation } from 'react-i18next';

const Project = ({hidden, onClose, project}) => {
 const { t } = useTranslation()

  return (
    
    <>{project ? 
      (<div className={`${hidden ? 'hidden' : null} project`}>
        <h1>{t(project.title)}
          <div className='close-icon' onClick={onClose}>
            <div className='close-left'></div>
            <div className='close-right'></div>
          </div>
          {/* <IoCloseOutline className='close-icon' onClick={onClose} /> */}
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