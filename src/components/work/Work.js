import React, { useState, useRef } from 'react'
import './work.css'
import Project from '../project/Project'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    title: 'work.RACI.Title',
    text: 'work.RACI.Project main text',
    techStackFrontEnd: 'work.RACI.Tech stack front end',
    techStackBackEnd: 'work.RACI.Tech stack back end',
    photos: ['/project-snapshots/raci.png'],
    role: 'Developer',
    link: 'https://bridgetro.se/raci/',
    github: 'https://github.com/bridgetrosefitz/raci'
  },
  {
    title: 'work.Digital Innovation.Title',
    text: 'work.Digital Innovation.Project main text',
    techStackFrontEnd: 'work.Digital Innovation.Tech stack front end',
    techStackBackEnd: 'work.Digital Innovation.Tech stack back end',
    photos: ['project-snapshots/digital-innovation.png'],
    role: 'Developer',
    link: 'http://digital-innovation-stats.herokuapp.com/',
    github: 'https://github.com/bridgetrosefitz/digital_innovation'
  },
  {
    title: 'work.Particles.Title',
    text: 'work.Particles.Project main text',
    techStackFrontEnd: 'work.Particles.Tech stack front end',
    techStackBackEnd: 'work.Particles.Tech stack back end',
    photos: ['project-snapshots/particles.png'],
    role: 'Developer',
    link: 'http://bridgetro.se',
    github: 'https://github.com/bridgetrosefitz/personal-website'
  },
  {
    title: 'work.Food Systems Dialogues.Title',
    text: 'work.Food Systems Dialogues.Project main text',
    techStackFrontEnd: 'work.Food Systems Dialogues.Tech stack front end',
    techStackBackEnd: 'work.Food Systems Dialogues.Tech stack back end',
    photos: ['project-snapshots/fsds.png'],
    role: 'Product-managed',
    link: 'https://fsds-tool.herokuapp.com/',
    github: 'https://github.com/Jesus-Escalona'
  },
]

const Work = props => {

  const [hidden, setHidden] = useState(true)
  const [currentProject, setCurrentProject] = useState(null)
  const projectsRef = useRef(null)
  const { t } = useTranslation()

  const projectDisplay = projects.map(project => {

    return (
      <div className="grid-item" onClick={() => {
        setCurrentProject(project)
        setHidden(prev => !prev)
      }}>
        <img alt={t(project.title)} src={project.photos[0]}></img>
          <p>{t(project.title)}{project.role !== 'Developer' ? (<span className='small-text'> ({t('work.Product-managed')})</span>) : null}</p>
      </div>)
  })

  return (
    <>  
      <Project hidden={hidden} onClose={() => setHidden(prev => !prev)} project={currentProject} />
      <div className='company-logo-display-container'>
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
      <div ref={props.projectsRef} className='projects-display-container'>
        {projectDisplay}
      </div>
    </>
  )
}

export default Work