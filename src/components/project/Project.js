import React from 'react';
import './project.css'
import ProjectSpecs from './ProjectSpecs';
import ProjectPhoto from './ProjectPhoto';
import { useTranslation } from 'react-i18next';
import Cross from '../cross/Cross'

const Project = ({hidden, onClose, project}) => {
 const { t } = useTranslation()

  return (
    
    <>{project ? 
      (<div className={`${hidden ? 'hidden' : null} project`}>
        <h1>{t(project.title)}
        <Cross onClose={onClose}/>
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