import React from 'react'
import { useTranslation } from 'react-i18next'
import Localization from '../localization/Localization'
import HeaderSmall from '../header/HeaderSmall'
import './about.css'

const About = props => {
  const { t } = useTranslation()

  return(
    <>
    <Localization />
    <button onClick={() => props.history.push('/')} className='work-button'>Work</button>
    <HeaderSmall/>
      <h2 className='about-header' >{t('about.About me')}</h2>
      <p className='about-p'>{t('about.About main text')}</p>
      <br/>
      <div className='photo-of-me'>
        <img alt='Me at Trolltunga, Norway' src='/photos/Trolltunga.jpeg'/>
      </div>
      <h2 className='about-header'>{t('about.My values')}</h2>
      <p className='about-p'>
        <b>{t('about.Make it ok to be wrong')}</b><br/>
        {t('about.Make it ok to be wrong text')}
      </p>
      <p className='about-p'>
        <b>{t('about.Be the one to change and be vulnerable')}</b><br />
        {t('about.Be the one to change and be vulnerable text')}
      </p>
      <p className='about-p'>
        <b>{t('about.Care about the people you work with')}</b><br />
        {t('about.Care about the people you work with text')}
      </p>
      <p className='about-p'>
        <b>{t('about.People can change')}</b><br />
        {t('about.People can change text')}
      </p>
    </>
  )
}

export default About