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
    photos: ['/project-snapshots/raci/raci-1-project-and-tasks-page.png', '/project-snapshots/raci/raci-2-signup.png', '/project-snapshots/raci/raci-3-login.png', '/project-snapshots/raci/raci-4-login-error.png', '/project-snapshots/raci/raci-5-projects-page.png', '/project-snapshots/raci/raci-6-edit-project.png', '/project-snapshots/raci/raci-7-new-task.png', '/project-snapshots/raci/raci-8-delete-project.png', '/project-snapshots/raci/raci-9-loading.png'],
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
    photos: ['/project-snapshots/digital-innovation/digital-innovation-1-landing-page.png', '/project-snapshots/digital-innovation/digital-innovation-2-signup.png', '/project-snapshots/digital-innovation/digital-innovation-3-login.png', '/project-snapshots/digital-innovation/digital-innovation-4-login-error.png', '/project-snapshots/digital-innovation/digital-innovation-5-capital.png', '/project-snapshots/digital-innovation/digital-innovation-6-new-ideas-with-comment.png', '/project-snapshots/digital-innovation/digital-innovation-6-new-ideas-with-comment.png', '/project-snapshots/digital-innovation/digital-innovation-7-activity.png'],
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
    photos: ['/project-snapshots/particles/particles-1-basic.png', '/project-snapshots/particles/particles-2-small-particle-size.png', '/project-snapshots/particles/particles-3-zoom-intro.png', '/project-snapshots/particles/particles-4-tilted-plane.png', '/project-snapshots/particles/particles-5-massive-depth.png', '/project-snapshots/particles/particles-6-negative-depth.png', '/project-snapshots/particles/particles-7-large-particle-size.png'],
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
    photos: ['/project-snapshots/fsds/fsds-1-event-insights.png', '/project-snapshots/fsds/fsds-2-landing-page.png', '/project-snapshots/fsds/fsds-3-summary.png', '/project-snapshots/fsds/fsds-4-participants.png', '/project-snapshots/fsds/fsds-5-participants-and-download-buttons.png', '/project-snapshots/fsds/fsds-6-table-plan.png', '/project-snapshots/fsds/fsds-7-table-plan-click-and-drag.png', '/project-snapshots/fsds/fsds-8-diversity-by-table.png'],
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
        <PhotoSlideshow arrowColor='transparent' photos={project.photos}/>
        <div className='project-specs-container'>
          <h3 className='project-title'>{t(project.title)}{project.role === 'Product-managed' ? <span style={{ fontSize: '0.5em', fontWeight: '400', paddingLeft: '2px'}}> (Product-managed)</span> : null}</h3>
          <div className='tech-logo-container'>
            {projectTechLogos}
          </div>
          <p className='project-short-text'>{t(project.shortText)}</p>
          <div className='buttons-container'>
            <Tag name={'View site'} link={project.link}/>
            <Tag name={project.role === 'Product-managed' ? 'Jesus Escalona' : 'View the code'} link={`${project.github}/#readme`} img={<AiOutlineGithub/>}/>
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