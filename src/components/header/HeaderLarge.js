import React from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'

const HeaderLarge = props => {
  const { t } = useTranslation()

  const citySpans = () => {
    const arrayOfSpans = props.cities.map((city, index) => {
      let classNameForCitySpan = ''
      if(props.city === city) {classNameForCitySpan = 'selected'}
      if (index === 0) {
        return <span key={index} className={`city ${classNameForCitySpan}`} onMouseEnter={() => props.setCity(city)}>{t(`header.${city}`)}</span>
        }
      else {
        return (<span key={index} className={`city ${classNameForCitySpan}`} onMouseEnter={() => props.setCity(city)}>{` · ${t(`header.${city}`)}`}</span>)
      }
  })

    return arrayOfSpans
  }

  return (
    <div className="header">
      <h1>Bridget Fitzgerald</h1>
      <h2>{t('header.Full-stack-developer')}</h2>
      <h3>{citySpans()}</h3>
    </div>
  )
}

export default HeaderLarge

