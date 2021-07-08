import React, { useState } from 'react'
import './main.css'
import Project from '../project/Project'

// Main component

const projects = [
  {
    title: 'RACI Project Management Web App',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    photos: ['/project-snapshots/raci.png'],
    role: 'Developer',
    link: 'https://bridgetro.se/raci/',
    github: 'https://github.com/bridgetrosefitz/raci'
  },
  {
    title: 'Digital Innovation Statistics App',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    photos: ['project-snapshots/digital-innovation.png'],
    role: 'Developer',
    link: 'http://digital-innovation-stats.herokuapp.com/',
    github: 'https://github.com/bridgetrosefitz/digital_innovation'
  },
  {
    title: 'Food Systems Dialogues',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    photos: ['project-snapshots/fsds.png'],
    role: 'Product-managed',
    link: 'https://fsds-tool.herokuapp.com/',
    github: 'https://github.com/Jesus-Escalona'
  },
  {
    title: 'Particles',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    photos: ['project-snapshots/particles.png'],
    role: 'Developer',
    link: 'http://bridgetro.se',
    github: 'https://github.com/bridgetrosefitz/personal-website'
  }
]

const Main = () => {

  const [hidden, setHidden] = useState(true)
  const [currentProject, setCurrentProject] = useState(null)

  const projectDisplay = projects.map(project => {

    return (
      <div className="grid-item" onClick={() => {
        setCurrentProject(project)
        setHidden(prev => !prev)
      }}>
        <img alt={project.title} src={project.photos[0]}></img>
          <div>{project.title}{project.role !== 'Developer' ? (<span className='small-text'> ({project.role})</span>) : null}</div>
      </div>)
  })

  return (
    <>  
      <Project hidden={hidden} onClose={() => setHidden(prev => !prev)} project={currentProject} />
      <div className='company-logo-display-container'>
        <img alt='Shadow' src='company-logos/shadow-logo-red.png'></img>
        <img alt='LEK Consulting' src='company-logos/lek-logo.svg'></img>
        <img alt='World Economic Forum' src='company-logos/wef-logo.png'></img>
        <img alt='United Nations' src='company-logos/united-nations-logo.png'></img>
        <img alt='Institut Montaigne' src='company-logos/institut-montaigne-logo.png'></img>
        <img alt='国際交流基金' src='company-logos/japan-foundation-logo-english.png'></img>
        <img alt='Australian Music Examinations Board' src='company-logos/ameb-logo.jpeg'></img>
      </div>
      <div className='projects-display-container'>
        {projectDisplay}
      </div>
    </>
  )
}

export default Main