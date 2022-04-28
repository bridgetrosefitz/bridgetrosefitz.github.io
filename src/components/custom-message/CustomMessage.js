import React, { useState } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const CustomMessage = () => {
  const { t } = useTranslation()
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const maxSentenceIndex = 9

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
    config: config.molasses,
  }))

  // A little bit of obfuscation for you sneaker buggers out there
  const allowableNames = ['bm90aW9u','Z29vZ2xl','YXBwbGU=','c2xhY2s='].map(encodedName => atob(encodedName))

  const generateNameForMessage = (path) => {
    const lowerCase = path.split("/").slice(-1)[0]
    if(allowableNames.includes(lowerCase)) {
      const properCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
      return properCase
    } else return t('custom-message.there')
  }

  // If you add a new sentence, remember to update maxSentenceIndex
  const sentences = [
    `${t('custom-message.Hi')} ${generateNameForMessage(window.location.href)}`,
    `${t("custom-message.Welcome to my site")}`,
    `${t("custom-message.It's lovely to have you here")}`,
    `${t("custom-message.You can browse my projects below")}`,
    `${t("custom-message.And see my process to build them, including user stories and ERDs")}`,
    `${t("custom-message.I taught myself React-Three-Fiber (Three.js) to make this site")}`,
    `${t("custom-message.I'd love to chat more about how I built it")}`,
    `${t("custom-message.Just let me know")}`,
    `${t("custom-message.Most of all, I hope you enjoy having a look around")}`,
    `${t("custom-message.Bridget x")}`
  ]

  // const sentences = [
  //   `Hi, ${generateNameForMessage(window.location.href)}.`,
  //   "Welcome to my site.",
  //   "It's lovely to have you here.",
  //   "You can browse my projects below.",
  //   "And see my process to build them, \n including user stories and ERDs.",
  //   "I taught myself \n React-Three-Fiber (Three.js) \n to make this site.",
  //   "I'd love to chat more \n about how I built it.",
  //   "Just let me know :)",
  //   "Most of all, \n I hope you enjoy having \n a look around.",
  //   "Bridget x"
  // ]

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