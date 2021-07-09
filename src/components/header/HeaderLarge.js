import React from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'

const HeaderLarge = props => {
  const { t, i18n } = useTranslation()

  const citySpans = () => {
    const arrayOfSpans = props.cities.map((city, index) => {
      if (index === 0) {
        return <span key={index} onMouseEnter={() => props.setCity(city)}>{city}</span>
        }
      else {
        return (<span onMouseEnter={() => props.setCity(city)}>{` · ${city}`}</span>)
      }
  })

    return arrayOfSpans
  }

  return (
    <div {...props} className="header">
      <h1>Bridget Fitzgerald</h1>
      <h2>{t('header.h2')}</h2>
      <h3>{citySpans()}</h3>
    </div>
  )
}

export default HeaderLarge

