import './projects.css'
import Tag from '../tag/Tag'
import { AiOutlineGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import PhotoSlideshow from '../photo-slideshow/PhotoSlideshow'

const techLogos = {
  'React.js': '/tech-logos/react.svg',
  'Rails': '/tech-logos/rails.svg', 
  'Three.js': '/tech-logos/threejs.png', 
  'Google Sheets API': '/tech-logos/google-sheets.png', 
  'JWT': '/tech-logos/jwt.svg', 
  'Semantic UI React': '/tech-logos/semantic-ui-react.png', 
  'Bootstrap': '/tech-logos/bootstrap.png',
  'JSON API': '/tech-logos/json-api.png',
  'PostgreSQL': '/tech-logos/postgresql.png',
  'webpack': 'tech-logos/webpack.png',
  'Apex charts': 'tech-logos/apex-charts.png',
  'drei': 'tech-logos/drei.png',
  'GSAP': 'tech-logos/greensock.png'
}

const projects = [
  {
    title: 'work.RACI.Title',
    text: 'work.RACI.Project main text',
    shortText: 'work.RACI.Project short text',
    techStack: ['React.js', 'Rails', 'JSON API', 'PostgreSQL', 'JWT', 'Semantic UI React'],
    techStackFrontEnd: 'work.RACI.Tech stack front end',
    techStackBackEnd: 'work.RACI.Tech stack back end',
    photos: ['/project-snapshots/raci.png', '/project-snapshots/raci-photo-2.png', '/project-snapshots/raci-photo-3.png'],
    role: 'Developer',
    link: 'https://bridgetro.se/raci/',
    github: 'https://github.com/bridgetrosefitz/raci',
    userStories: 'https://www.notion.so/Bridget-Fitzgerald-RACI-3166a2742268438889473e69c943d72e'
  },
  {
    title: 'work.Digital Innovation.Title',
    text: 'work.Digital Innovation.Project main text',
    shortText: 'work.Digital Innovation.Project short text',
    techStack: ['Rails', 'Bootstrap', 'PostgreSQL', 'webpack', 'Apex charts'],
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
    techStack: ['React.js', 'Three.js', 'drei', 'GSAP', 'webpack'],
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
    techStack: ['React.js', 'Google Sheets API'],
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

const Projects = props => {
  const { t } = useTranslation()

const projectCells = projects.map((project, index) => {

    let projectTechLogos = project.techStack.map((techUsed, index) => {
      return (

        <img
          index={index}
          className='tech-logo'
          alt={techUsed}
          src={techLogos[techUsed]}
        />

      )
    })
    
    return(
      <>
        {/* <img alt={'ProjectPhoto'} src={project.photos[0]}></img> */}
        <PhotoSlideshow arrowColor='white' photos={project.photos}/>
        <div className='project-specs-container'>
          <h3 className='project-title'>{t(project.title)}</h3>
          <div className='tech-logo-container'>
            {projectTechLogos}
          </div>
          <div className='project-short-text'>{t(project.shortText)}</div>
          <div className='buttons-container'>
            <Tag name={'View site'} link={project.link}/>
            <Tag name='View the code' link={`${project.github}/#readme`} img={<AiOutlineGithub/>}/>
          </div>
        </div>
      </>
    )

  })

  return (
    <div className='projects-container'>
      {projectCells}
    </div>
  )

}

export default Projects