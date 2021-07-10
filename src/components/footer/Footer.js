import React from 'react'
import './footer.css'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { TiSocialLinkedin } from 'react-icons/ti'
import {  useTranslation } from 'react-i18next'

const allIcons = [
  
  {
    component: <span className='cv'>CV</span>,
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

const iconsGroup = allIcons.map(icon => {
  return (
    <a href={icon.link} rel='noreferrer' target="_blank">
      {icon.component}
    </a>
  )
})

const Footer = props => {
  const { t } = useTranslation()

  return(
    <div className='footer'>
      <div className='footer-text'>{t('footer.text')}</div>
      <div className='icons-container'>{iconsGroup}</div>
    </div>
  )
}

export default Footer