import React, { useState } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'

const CustomMessage = () => {
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
    } else return "there"
  }

  // If you add a new sentence, remember to update maxSentenceIndex

  const sentences = [
    `Hi, ${generateNameForMessage(window.location.href)}.`,
    "Welcome to my site.",
    "It's lovely to have you here.",
    "You can browse my projects below.",
    "And see my process to build them, \n including user stories and ERDs.",
    "I taught myself \n React-Three-Fiber (Three.js) \n to make this site.",
    "I'd love to chat more \n about how I built it.",
    "Just let me know :)",
    "Most of all, \n I hope you enjoy having \n a look around.",
    "Bridget x"
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