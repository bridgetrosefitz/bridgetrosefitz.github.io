import React, { useState } from 'react'
import './main.css'
import Project from '../project/Project'

// Main component

const projectInfo = {
  title: 'RACI Project Management Web Application',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  photos: ['/project-snapshots/raci.png']
}

const Main = () => {

  const [hidden, setHidden] = useState(false)

  return (
    <>  

      <Project hidden={hidden} onClose={() => setHidden(prev => !prev)} project={projectInfo} />
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
        <div className="grid-item">
            <img alt='Digital Innovation Statistics App' src='project-snapshots/digital-innovation.png'></img>
            <div>Digital Innovation Statistics</div>
          </div>
          <div className="grid-item">
            <img alt='RACI App' src='project-snapshots/raci.png'></img>
            <div>RACI Project Management</div>
          </div>
          <div className="grid-item">
            <img alt='Particles' src='project-snapshots/particles.png'></img>
            <div>Particles - Three.js</div>
          </div>
          <div className="grid-item">
            <img alt='Food Systems Dialogues' src='project-snapshots/fsds.png'></img>
          <div>Food Systems Dialogues <span className='small-text'>(Product managed)</span></div>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
      </div>
    </>
  )
}

export default Main