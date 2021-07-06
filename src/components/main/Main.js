import './main.css'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

// NavArrow component
const NavArrow = () => {

  return ( 
    <div className='nav-arrow'>
      <HiOutlineArrowNarrowDown />
    </div>
  )
}

// Main component
//  On company logos, make onClick go to website

const Main = () => {

  return (
    <>  
      <NavArrow />
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