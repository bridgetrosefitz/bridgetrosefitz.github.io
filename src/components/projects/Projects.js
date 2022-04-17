import './projects.css'
import Tag from '../tag/Tag'
import { AiOutlineGithub } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import PhotoSlideshow from '../photo-slideshow/PhotoSlideshow'
import i18n from 'i18next';

const techLookup = {
  'React': { logo: '/tech-logos/react.svg', link:'https://reactjs.org/' },
  'Rails': { logo: '/tech-logos/rails.svg', link: 'https://rubyonrails.org/'},
  'Three.js': { logo: '/tech-logos/threejs.png', link: 'https://threejs.org/'},
  'Google Sheets API': { logo: '/tech-logos/google-sheets.png', link: 'https://developers.google.com/sheets/api' },
  'JWT': { logo: '/tech-logos/jwt.svg', link: 'https://jwt.io/'},
  'Semantic UI React': { logo: '/tech-logos/semantic-ui-react.png', link: 'https://react.semantic-ui.com/'},
  'Bootstrap': { logo: '/tech-logos/bootstrap.png', link: 'https://getbootstrap.com/'},
  'JSON API': { logo: '/tech-logos/json-api.png', link: 'https://jsonapi.org/'},
  'PostgreSQL': { logo: '/tech-logos/postgresql.png', link: 'https://www.postgresql.org/'},
  'webpack': { logo: 'tech-logos/webpack.png', link: 'https://webpack.js.org/'},
  'Apex charts': { logo: 'tech-logos/apex-charts.png', link: 'https://apexcharts.com/'},
  'drei': { logo: 'tech-logos/drei.png', link: 'https://drei.pmnd.rs/'},
  'GSAP': { logo: 'tech-logos/greensock.png', link: 'https://greensock.com/gsap/'},
  'i18next': { logo: '/tech-logos/i18next.png', link: 'https://react.i18next.com/'},
  'BigQuery': { logo: '/tech-logos/big-query.png', link: 'https://cloud.google.com/bigquery'},
  'Forge': { logo: '/tech-logos/atlassian.png', link: 'https://developer.atlassian.com/platform/forge/'},
  'ECMAScript 6': { logo: '/tech-logos/ecmascript.png', link: 'https://www.ecma-international.org/technical-committees/tc39/'},
  'CSS': { logo: '/tech-logos/css.png', link: 'https://www.w3.org/Style/CSS/' },
  'HTML': { logo: '/tech-logos/html.png', link: 'https://html.spec.whatwg.org/multipage/' }
}

const projects = [
  {
    title: 'work.gmxdropbox.Title',
    text: 'work.gmxdropbox.Project main text',
    shortText: 'work.gmxdropbox.Project short text',
    techStack: ['ECMAScript 6', 'HTML', 'CSS'],
    techStackFrontEnd: 'work.gmxdropbox.Tech stack front end',
    techStackBackEnd: 'work.gmxdropbox.Tech stack back end',
    photos: [
      '/project-snapshots/gmxdropbox/gmxdropbox-1-landing-page-desktop.png', 
      '/project-snapshots/gmxdropbox/gmxdropbox-2-success-screen-desktop.png', 
      '/project-snapshots/gmxdropbox/gmxdropbox-3-dropbox-screen-with-download-desktop.png', 
      '/project-snapshots/gmxdropbox/gmxdropbox-4-certificate-desktop.png',
      '/project-snapshots/gmxdropbox/gmxdropbox-5-demo-desktop.mov',
      '/project-snapshots/gmxdropbox/gmxdropbox-6-gallery.png'],
    role: 'Developer',
    mediaIncludesLink: false,
    link: 'https://www.instagram.com/p/CTmxNw4FROX/',
    github: null,
    userStories: null
  },
  {
    title: 'work.codegeist.Title',
    text: 'work.codegeist.Project main text',
    shortText: 'work.codegeist.Project short text',
    techStack: ['Forge', 'React'],
    techStackFrontEnd: 'work.codegeist.Tech stack front end',
    techStackBackEnd: 'work.codegeist.Tech stack back end',
    photos: [
      '/project-snapshots/codegeist/codegeist-1-driver-actions.png',
      '/project-snapshots/codegeist/codegeist-2-approver-health-metrics.png',
      '/project-snapshots/codegeist/codegeist-3-contributor-actions.png',
      '/project-snapshots/codegeist/codegeist-4-informed-actions.png',
      '/project-snapshots/codegeist/codegeist-5-settings.png',
      'https://user-images.githubusercontent.com/41013984/134103950-498f7b9e-b6f5-4e9f-b1ad-73d9d4c46c7f.mp4',],
    role: 'Developer',
    mediaIncludesLink: true,
    link: 'https://devpost.com/software/raci-project-management',
    github: 'https://github.com/bridgetrosefitz/codegeist-daci-project-management',
    userStories: null
  },
  {
    title: 'work.RACI.Title',
    text: 'work.RACI.Project main text',
    shortText: 'work.RACI.Project short text',
    techStack: ['React', 'Rails', 'JSON API', 'PostgreSQL', 'JWT', 'Semantic UI React'],
    techStackFrontEnd: 'work.RACI.Tech stack front end',
    techStackBackEnd: 'work.RACI.Tech stack back end',
    photos: [
      '/project-snapshots/raci/raci-1-landing-page.png',
      '/project-snapshots/raci/raci-2-project-and-tasks-page.png', 
      '/project-snapshots/raci/raci-3-signup.png', 
      '/project-snapshots/raci/raci-4-login.png', 
      '/project-snapshots/raci/raci-5-login-error.png', 
      '/project-snapshots/raci/raci-6-projects-page.png', 
      '/project-snapshots/raci/raci-7-edit-project.png', 
      '/project-snapshots/raci/raci-8-new-task.png', 
      '/project-snapshots/raci/raci-9-delete-project.png', 
      '/project-snapshots/raci/raci-10-loading.png'],
    role: 'Developer',
    mediaIncludesLink: false,
    link: 'https://raci.team',
    github: 'https://github.com/bridgetrosefitz/raci',
    userStories: 'https://www.notion.so/Bridget-Fitzgerald-RACI-3166a2742268438889473e69c943d72e'
  },
  {
    title: 'work.Digital Innovation.Title',
    text: 'work.Digital Innovation.Project main text',
    shortText: 'work.Digital Innovation.Project short text',
    techStack: ['Rails', 'Bootstrap', 'PostgreSQL', 'webpack', 'BigQuery', 'Apex charts'],
    techStackFrontEnd: 'work.Digital Innovation.Tech stack front end',
    techStackBackEnd: 'work.Digital Innovation.Tech stack back end',
    photos: [
      '/project-snapshots/digital-innovation/digital-innovation-1-landing-page.png', 
      '/project-snapshots/digital-innovation/digital-innovation-2-signup.png', 
      '/project-snapshots/digital-innovation/digital-innovation-3-login.png', 
      '/project-snapshots/digital-innovation/digital-innovation-4-login-error.png', 
      '/project-snapshots/digital-innovation/digital-innovation-5-capital.png', 
      '/project-snapshots/digital-innovation/digital-innovation-6-new-ideas-with-comment.png', 
      '/project-snapshots/digital-innovation/digital-innovation-7-activity.png'],
    role: 'Developer',
    mediaIncludesLink: false,
    link: 'http://digitalinnovation.fyi',
    github: 'https://github.com/bridgetrosefitz/digital_innovation',
    userStories: 'https://www.notion.so/Bridget-Fitzgerald-Digital-Innovation-0c0a03caf93f4643bfa85f634bd0d8ae'
  },
  {
    title: 'work.Particles.Title',
    text: 'work.Particles.Project main text',
    shortText: 'work.Particles.Project short text',
    techStack: ['React', 'Three.js', 'drei', 'GSAP', 'webpack'],
    techStackFrontEnd: 'work.Particles.Tech stack front end',
    techStackBackEnd: 'work.Particles.Tech stack back end',
    photos: [
      '/project-snapshots/particles/particles-1-basic.png', 
      '/project-snapshots/particles/particles-2-small-particle-size.png', 
      '/project-snapshots/particles/particles-3-zoom-intro.png', 
      '/project-snapshots/particles/particles-4-tilted-plane.png', 
      '/project-snapshots/particles/particles-5-massive-depth.png', 
      '/project-snapshots/particles/particles-6-negative-depth.png', 
      '/project-snapshots/particles/particles-7-large-particle-size.png'],
    role: 'Developer',
    mediaIncludesLink: false,
    link: 'http://bridgetro.se/particles/',
    github: 'https://github.com/bridgetrosefitz/particles',
    userStories: null
  },
  {
    title: 'work.Food Systems Dialogues.Title',
    text: 'work.Food Systems Dialogues.Project main text',
    techStack: ['React', 'Google Sheets API'],
    shortText: 'work.Food Systems Dialogues.Project short text',
    techStackFrontEnd: 'work.Food Systems Dialogues.Tech stack front end',
    techStackBackEnd: 'work.Food Systems Dialogues.Tech stack back end',
    photos: [
      '/project-snapshots/fsds/fsds-1-event-insights.png', 
      '/project-snapshots/fsds/fsds-2-landing-page.png', 
      '/project-snapshots/fsds/fsds-3-summary.png', 
      '/project-snapshots/fsds/fsds-4-participants.png', 
      '/project-snapshots/fsds/fsds-5-participants-and-download-buttons.png', 
      '/project-snapshots/fsds/fsds-6-table-plan.png', 
      '/project-snapshots/fsds/fsds-7-table-plan-click-and-drag.png', 
      '/project-snapshots/fsds/fsds-8-diversity-by-table.png'],
    mediaIncludesLink: false,
      role: 'Product-managed',
    link: 'https://fsds-tool.herokuapp.com/',
    github: 'https://github.com/Jesus-Escalona',
    userStories: 'https://docs.google.com/spreadsheets/d/1SICeapZqaMtsvrVGJHqvYo3tOVagKm988AiR43vGt58/edit?usp=sharing'
  },
  {
    title: 'work.Personal website.Title',
    text: 'work.Personal website.Project main text',
    techStack: ['React', 'Three.js', 'drei', 'i18next', 'CSS'],
    shortText: 'work.Personal website.Project short text',
    techStackFrontEnd: 'work.Personal Website.Tech stack front end',
    techStackBackEnd: 'work.Personal Website.Tech stack back end',
    photos: [
      '/project-snapshots/personal-website/personal-website-1-landing-page.png', 
      '/project-snapshots/personal-website/personal-website-2-exploding-spheres.png', 
      '/project-snapshots/personal-website/personal-website-3-company-logos-and-first-project.png', 
      '/project-snapshots/personal-website/personal-website-4-projects-japanese.png',
      '/project-snapshots/personal-website/personal-website-5-footer-japanese.png',
      '/project-snapshots/personal-website/personal-website-6-about-page-french.png'],
    role: 'Developer',
    mediaIncludesLink: false,
    link: 'https://bridgetro.se',
    github: 'https://github.com/bridgetrosefitz/bridgetrosefitz.github.io',
    userStories: 'https://bridgetrosefitz.notion.site/Bridget-Fitzgerald-Personal-website-57cf2e253112453884670a3cb9b44ecc'

  }
]

const Projects = props => {
  const { t } = useTranslation()

const projectCells = projects.map((project) => {

    let projectTechLogos = project.techStack.map((techUsed, index) => {
      return (
        <a key={index} href={techLookup[techUsed].link} target='_blank' rel='noreferrer'>
          <img
            className='tech-logo'
            alt={techUsed}
            src={techLookup[techUsed].logo}
          />
        </a>

      )
    })
  
    return(
      <>
        <PhotoSlideshow 
          dataAos='fade-up' 
          dataAosDuration="1500" 
          arrowType='circle-background'
          arrowColor='white' 
          photoType={project.mediaIncludesLink ? 'link' : 'files'}
          photos={project.photos}
        />
        <div data-aos='fade-up' data-aos-duration="1500" className='project-specs-container'>
          <h3 className={i18n.language === 'jp' ? 'japanese project-title' : 'project-title'} >{t(project.title)}{project.role === 'Product-managed' ? <span style={{ fontSize: '0.5em', fontWeight: '400', paddingLeft: '2px' }}> {(t('work.Product-managed'))} </span> : null}</h3>
          <div className='tech-logo-container'>
            {projectTechLogos}
          </div>
          <p className={i18n.language === 'jp' ? 'japanese project-short-text' : 'project-short-text'}>{t(project.shortText)}</p>
          <div className='buttons-container'>
            <Tag show={project.title === 'work.Personal website.Title' ? false : true} name={t('work.View site')} link={project.link}/>
            <Tag show={project.github ? true : false} name={project.role === 'Product-managed' ? t('work.Jesus Escalona') : t('work.View the code')} link={`${project.github}/#readme`} img={<AiOutlineGithub/>}/>
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