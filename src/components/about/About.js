import React from 'react'
import { useTranslation } from 'react-i18next'
import Localization from '../localization/Localization'
import HeaderSmall from '../header/HeaderSmall'
import Footer from '../footer/Footer'
import './about.css'

const values = [
  {
    title: 'about.Make it ok to be wrong',
    text: 'about.Make it ok to be wrong text'
  },
  {
    title: 'about.Be the one to change',
    text: 'about.Be the one to change text'
  },
  {
    title: 'about.Care about the people you work with',
    text: 'about.Care about the people you work with text'
  },
  {
    title: 'about.People can change',
    text: 'about.People can change text'
  }
]

const About = props => {
  const { t } = useTranslation()

  const valuesDisplay = values.map(value => {
      return(
        <>
        <h3 className='values-header'>{t(value.title)}</h3>
        <p className='values-p'>{t(value.text)}</p>
        </>
      )
  })



  return(
    <>
    <Localization {...props}/>
    <button onClick={() => props.history.push('/')} className='work-button'>Work</button>
    <HeaderSmall {...props}/>
      <h2 className='about-header' >{t('about.About me')}</h2>
      <p className='about-p'>{t('about.About main text')}</p>
      <br/>
      <div className='photo-of-me'>
        <img alt='Me at Trolltunga, Norway' src='/photos/Trolltunga.jpeg'/>
      </div>
      <h2 className='about-header'>{t('about.My values')}</h2>
      {valuesDisplay}
    <Footer/>
    </>
  )
}

export default About