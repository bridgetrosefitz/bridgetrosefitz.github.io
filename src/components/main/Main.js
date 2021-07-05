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
//  On company logos, make onHover go back to normal color on company logos
//  On company logos, make onClick go to website

const Main = () => {

  return (
    <>

      <div className='image-display-container'>
        <img alt='Shadow' src='company-logos/shadow-logo-red.png'></img>
        <img alt='LEK Consulting' src='company-logos/lek-logo.svg'></img>
        <img alt='World Economic Forum' src='company-logos/wef-logo.png'></img>
        <img alt='国際交流基金' src='company-logos/japan-foundation-logo-english.png'></img>
        <img alt='Institut Montaigne' src='company-logos/institut-montaigne-logo.png'></img>
        <img alt='United Nations' src='company-logos/united-nations-logo.png'></img>
        <img alt='Australian Music Examinations Board' src='company-logos/ameb-logo.jpeg'></img>
      </div>
      <NavArrow />
    </>
  )
}

export default Main