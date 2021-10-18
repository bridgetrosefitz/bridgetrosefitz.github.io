import React, { useState } from 'react'
import './work.css'
import { useTranslation } from 'react-i18next'
import Projects from '../projects/Projects'

const companies = [
  { name: 'Shadow',
    link: 'https://shadowapp.com/',
    logo: 'company-logos/shadow-logo.svg'},
  {
    name: 'L.E.K. Consulting',
    link: 'https://www.lek.com/',
    logo: 'company-logos/lek-logo.svg'
  },
  {
    name: 'World Economic Forum',
    link: 'https://www.weforum.org/',
    logo: 'company-logos/wef-logo.png'
  },
  {
    name: 'United Nations',
    link: 'https://www.un.org/en',
    logo: 'company-logos/united-nations-logo.png'
  },
  {
    name: 'Institut Montaigne',
    link: 'https://www.institutmontaigne.org/en',
    logo: 'company-logos/institut-montaigne-logo.png'
  },
  {
    name: 'Sciences Po',
    link: 'https://www.sciencespo.fr/en',
    logo: 'company-logos/sciences-po-logo.png'
  },
  {
    name: 'Monash University',
    link: 'https://www.monash.edu/',
    logo: 'company-logos/monash-university-logo.png'
  },
  {
    name: '国際交流基金',
    link: 'https://kansai.jpf.go.jp/',
    logo: 'company-logos/japan-foundation-logo-english.png'
  },
  {
    name: 'Australian Music Examinations Board',
    link: 'https://ameb.vic.edu.au/enrol/diplomas/#associate-in-music',
    logo: 'company-logos/ameb-logo.png'
  },
]

const Work = props => {

  const [hidden, setHidden] = useState(true)
  const [currentProject, setCurrentProject] = useState(null)

  const companyLogos = companies.map(company => {
    return(
      <a className='logoLink'rel='noreferrer' target='_blank' href={company.link}>
        <img alt={company.name} src={company.logo}/>
      </a>)
  })

  return (
    <>  
      <div ref={props.workRef} className='company-logo-display-container'>
       {companyLogos}
      </div>
      <div className='spacing-element-between-logos-and-projects'/>
      <Projects />
    </>
  )
}

export default Work