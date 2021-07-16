import React, { useState } from 'react'
import './work.css'
import Project from '../project/Project'
import { useTranslation } from 'react-i18next'
import Projects from '../projects/Projects'

const Work = props => {

  const [hidden, setHidden] = useState(true)
  const [currentProject, setCurrentProject] = useState(null)
  const { t } = useTranslation()

  // const projectDisplay = projects.map((project, index) => {

  //   return (
  //     <div key={index} className="grid-item" onClick={() => {
  //       setCurrentProject(project)
  //       setHidden(prev => !prev)
  //     }}>
  //       <img alt={t(project.title)} src={project.photos[0]}></img>
  //         <p>{t(project.title)}{project.role !== 'Developer' ? (<span className='small-text'> ({t('work.Product-managed')})</span>) : null}</p>
  //     </div>)
  // })

  return (
    <>  
      <Project hidden={hidden} onClose={() => setHidden(prev => !prev)} project={currentProject} />
      <div ref={props.workRef} className='company-logo-display-container'>
        <img alt='Shadow' src='company-logos/shadow-logo.svg'></img>
        <img alt='LEK Consulting' src='company-logos/lek-logo.svg'></img>
        <img alt='World Economic Forum' src='company-logos/wef-logo.png'></img>
        <img alt='United Nations' src='company-logos/united-nations-logo.png'></img>
        <img alt='Institut Montaigne' src='company-logos/institut-montaigne-logo.png'></img>
        <img alt='Sciences Po' src='company-logos/sciences-po-logo.png'></img>
        <img alt='Monash University' src='company-logos/monash-university-logo.png'></img>
        <img alt='国際交流基金' src='company-logos/japan-foundation-logo-english.png'></img>
        <img alt='Australian Music Examinations Board' src='company-logos/ameb-logo.png'></img>
      </div>
      <div className='spacing-element-between-logos-and-projects'/>
      <h2 className='tech-projects-header'>Projects</h2>
      {/* <div className='projects-display-container'>
        {projectDisplay}
      </div> */}
      <Projects />
    </>
  )
}

export default Work