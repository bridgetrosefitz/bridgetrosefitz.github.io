import './projects.css'
import Tag from '../tag/Tag'
import { VscGithubAlt } from 'react-icons/vsc'
import React from 'react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    title: 'work.RACI.Title',
    text: 'work.RACI.Project main text',
    shortText: 'work.RACI.Project short text',
    techStackFrontEnd: 'work.RACI.Tech stack front end',
    techStackBackEnd: 'work.RACI.Tech stack back end',
    photos: ['/project-snapshots/raci.png'],
    role: 'Developer',
    link: 'https://bridgetro.se/raci/',
    github: 'https://github.com/bridgetrosefitz/raci',
    userStories: 'https://www.notion.so/Bridget-Fitzgerald-RACI-3166a2742268438889473e69c943d72e'
  },
  {
    title: 'work.Digital Innovation.Title',
    text: 'work.Digital Innovation.Project main text',
    shortText: 'work.Digital Innovation.Project short text',
    techStackFrontEnd: 'work.Digital Innovation.Tech stack front end',
    techStackBackEnd: 'work.Digital Innovation.Tech stack back end',
    photos: ['project-snapshots/digital-innovation.png'],
    role: 'Developer',
    link: 'http://digital-innovation-stats.herokuapp.com/',
    github: 'https://github.com/bridgetrosefitz/digital_innovation',
    userStories: 'https://www.notion.so/Bridget-Fitzgerald-Digital-Innovation-0c0a03caf93f4643bfa85f634bd0d8ae'
  },
  {
    title: 'work.Particles.Title',
    text: 'work.Particles.Project main text',
    shortText: 'work.Particles.Project short text',
    techStackFrontEnd: 'work.Particles.Tech stack front end',
    techStackBackEnd: 'work.Particles.Tech stack back end',
    photos: ['project-snapshots/particles.png'],
    role: 'Developer',
    link: 'http://bridgetro.se',
    github: 'https://github.com/bridgetrosefitz/personal-website',
    userStories: 'bridgetro.se'
  },
  {
    title: 'work.Food Systems Dialogues.Title',
    text: 'work.Food Systems Dialogues.Project main text',
    shortText: 'work.Food Systems Dialogues.Project short text',
    techStackFrontEnd: 'work.Food Systems Dialogues.Tech stack front end',
    techStackBackEnd: 'work.Food Systems Dialogues.Tech stack back end',
    photos: ['project-snapshots/fsds.png'],
    role: 'Product-managed',
    link: 'https://fsds-tool.herokuapp.com/',
    github: 'https://github.com/Jesus-Escalona',
    userStories: 'https://docs.google.com/spreadsheets/d/1SICeapZqaMtsvrVGJHqvYo3tOVagKm988AiR43vGt58/edit?usp=sharing'
  },
]

const reactLogo = '/tech-logos/react.svg'
const semanticUiLogo = '/tech-logos/semantic-ui.png'
const jwt = '/tech-logos/jwt.svg'
const railsLogo = '/tech-logos/rails.svg'

const Projects = props => {
const { t } = useTranslation()

  const projectGridItems = projects.map((project, index) => {

    return (
      <>
      {/* PROJECT SNAPSHOT (left-hand-side cell) */}
        <img alt={'ProjectPhoto'} src={project.photos[0]}></img>
      {/* PROJECT SPECS (right-hand-side cell) */}
        <div key={index} className='project-specs-container'>
          {/* PROJECT TITLE */}
          <h3 className='project-title'>{t(project.title)}</h3>
          {/* PROJECT LOGOS */}
          <div className='tech-logo-container'>
            <img className='tech-logo' alt='React.js' src={reactLogo} ></img>
            <img className='tech-logo' alt='Ruby on Rails' src={railsLogo} ></img>
            <img className='tech-logo' alt='JWT' src={jwt} ></img>
            <img className='tech-logo' alt='Semantic UI React' src={semanticUiLogo} ></img>
          </div>
          {/* PROJECT DESCRIPTION */}
          <div className='project-short-text'>{t(project.shortText)}</div>
          <div className='buttons-container'>
            <Tag name={'View site'} />
            <Tag name='View the code'/>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
    <div className='projects-container'>
      {projectGridItems}
    </div>
    </>
  )

}

export default Projects