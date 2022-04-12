import React, { useState, useEffect } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'

const CustomMessage = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [maxSentenceIndex, setMaxSentenceIndex] = useState(1)

  // If you add a new sentence, remember to update maxSentenceIndex
  const sentences = [
    "Hi, Notion.",
    "Welcome to my site.",
    "It's lovely to have you here.",
    "You can browse my projects below.",
    "And see my process to build them, including user stories and ERDs.",
    "I taught myself React-Three-Fiber (Three.js) to make this site.",
    "I'd love to chat more about how I built it.",
    "Just let me know :)",
    "Most of all, I hope you enjoy having a look around.",
  ]

  const props = useSpring({
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    loop: {reverse: true},
    config: config.molasses,
  })

  useEffect(() => {
    const interval = setInterval(() => setSentenceIndex(prevSentenceIndex => {
      return prevSentenceIndex <= maxSentenceIndex ? prevSentenceIndex + 1 : prevSentenceIndex}), 5000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className='custom-message-container'>
      <animated.div className={`custom-message ${sentenceIndex > maxSentenceIndex ? 'custom-message-hide' : ''}`} style={props}>{sentences[sentenceIndex]}</animated.div>
    </div>
  )
}
export default CustomMessage