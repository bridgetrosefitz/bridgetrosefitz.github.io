import React from 'react'
import { useTranslation } from 'react-i18next'
import Localization from '../localization/Localization'
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

  const valuesDisplay = values.map((value, index) => {
      return(
        <>
          <h3 data-aos="fade-up" data-aos-duration="700" key={index} className='values-header'>{t(value.title)}</h3>
          <p data-aos="fade-up" data-aos-duration="700" key={index} className='values-p'>{t(value.text)}</p>
        </>
      )
  })

  return(
    <>
    <Localization {...props}/>
    <button onClick={() => props.history.push('/')} className='side-button'>{t('work.Work button')}</button>
      <h2 className='about-header' >{t('about.About me')}</h2>
      <div className='spacing-element-after-about-header' />
      <p className='about-p'>{t('about.About main text')}<span className='small-text'>{t('about.Asterisk')}</span></p>
      <br/>
      <div className='photo-of-me'>
        <img data-aos="fade-up" data-aos-duration="700" alt='Me at Trolltunga, Norway' src='/photos/Trolltunga.jpeg'/>
      </div>
      <div className='spacing-element-after-photo'/>
      <h2 className='about-header'>{t('about.My values')}</h2>
      {valuesDisplay}
    <Footer/>
    </>
  )
}

export default About