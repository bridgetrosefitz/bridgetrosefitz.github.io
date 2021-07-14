import React from 'react'
import './footer.css'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'
import {  useTranslation } from 'react-i18next'

const allIcons = [
  
  {
    component: <AiOutlineMail />,
    link: 'mailto:bridgetrosefitz@gmail.com',
  },
  {
    component: <TiSocialLinkedin />,
    link: 'https://www.linkedin.com/in/bridgetrosefitzgerald/',
  },
  {
    component: <AiFillGithub />,
    link: 'https://github.com/bridgetrosefitz'
  }
]

const iconsGroup = allIcons.map((icon, index) => {
  return (
    <a key={index} className='contact-logos' href={icon.link} rel='noreferrer' target="_blank">
      {icon.component}
    </a>
  )
})

const Footer = props => {
  const { t } = useTranslation()

  return(
    <div className='footer'>
      <div className='footer-text'>
        <p>{t("footer.Don't hesitate to say hello")}</p>
        <p>{t("footer.I would love to hear from you")}</p>
      </div>
      <div className='email-div'><a href='mailto:bridgetrosefitz@gmail.com' rel='noreferrer' target='_blank'>bridgetrosefitz@gmail.com</a></div>
      <div className='icons-container'>{iconsGroup}</div>
    </div>
  )
}

export default Footer