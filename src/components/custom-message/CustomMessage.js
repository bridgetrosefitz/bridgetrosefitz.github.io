import React, { useState } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next';

const CustomMessage = () => {
  const { t } = useTranslation()
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const maxSentenceIndex = 6

  const showGreeting = () => {
    api.start({
      to: { opacity: 1, width: 400 },
      onResolve: hideGreeting
    })
  }

  const hideGreeting = () => {
    api.start({ 
      to: { opacity: 0, width: 0},
      onResolve: () => {
        if (sentenceIndex <= maxSentenceIndex) {
          setSentenceIndex(prevSentenceIndex => prevSentenceIndex + 1)
          showGreeting()
        }
      }
    })
  }
  
  const [props, api] = useSpring(() => ({
    from: { opacity: 0, width: 0 },
    to: { opacity: 1, width: 400 },
    onResolve: hideGreeting,
    config: { mass: 0.5, tension: 170, friction: 60 },
  }))

  // A little bit of obfuscation for you sneaker buggers out there
  const allowableNames = ['bm90aW9u','Z29vZ2xl','YXBwbGU=','c2xhY2s=','a2F0aGxlZW4=', 'dHJhY3RhYmxl'].map(encodedName => atob(encodedName))

  const generateNameForMessage = (path) => {
    const lowerCase = path.split("/").slice(-1)[0]
    if(allowableNames.includes(lowerCase)) {
      const properCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
      return properCase
    } else return t('custom-message.there')
  }

  // If you add a new sentence, remember to update maxSentenceIndex
  const sentences = [
    `${t('custom-message.Hi')}${i18n.language === 'jp' || 'fr' ? (generateNameForMessage(window.location.href) === '' ? (`${generateNameForMessage(window.location.href)}`) : ` ${generateNameForMessage(window.location.href)}`) : ` ${generateNameForMessage(window.location.href)}` }`,
    `${t("custom-message.Welcome to my site")}`,
    `${t("custom-message.You can browse my projects below")}`,
    `${t("custom-message.I taught myself React-Three-Fiber (Three.js) to make this site")}`,
    `${t("custom-message.I'd love to chat more about how I built it")}`,
    `${t("custom-message.Just let me know")}`,
    `${t("custom-message.Most of all, I hope you enjoy having a look around")}`,
  ]

  return (
    <div className='custom-message-container'>
        <animated.div 
          className={`custom-message ${sentenceIndex > maxSentenceIndex ? 'custom-message-hide' : ''}`} 
        style={{ ...props, overflow: 'hidden'}}
        >
          <span className='custom-message-text'>
            {sentences[sentenceIndex]}
          </span>
        </animated.div>
    </div>
  )
}
export default CustomMessage