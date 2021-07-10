import React from 'react'
import './footer.css'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'

const allIcons = [
  {
    component: <AiFillGithub />,
    link: 'https://github.com/bridgetrosefitz'
  },
  {
    component: <TiSocialLinkedin />,
    link: 'https://www.linkedin.com/in/bridgetrosefitzgerald/',
  },
  {
    component: <AiOutlineMail />,
    link: 'mailto:bridgetrosefitz@gmail.com',
  }]

const iconsGroup = allIcons.map(icon => {
  return (
    <a href={icon.link} rel='noreferrer' target="_blank">
      {icon.component}
    </a>
  )
})

const Footer = props => {

  return(
    <div className='footer'>
      <div className='icons-container'>{iconsGroup}</div>
    </div>
  )
}

export default Footer