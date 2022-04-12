import React, { useState, useEffect } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'

const CustomMessage = () => {
  const [flip, setFlip] = useState(false)
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [maxSentenceIndex, setMaxSentenceIndex] = useState(1)

  // Use messageIndex to determine which sentence shows up
  // Get the animation to run once only

  const sentences = [
    "Hi, Notion",
    "Welcome to my site"
  ]

  const props = useSpring({
    to: { opacity: 1 }, 
    from: { opacity: 0 }, 
    reverse: flip,
    delay: 100,
    config: config.molasses,
    onRest: () => setFlip(!flip)
  })

  useEffect(() => {
    const interval = setInterval(() => setSentenceIndex(prevSentenceIndex => {
      return prevSentenceIndex <= maxSentenceIndex ? prevSentenceIndex + 1 : prevSentenceIndex}), 3000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className='custom-message-container'>
      <animated.div className='custom-message' style={props}>{sentences[sentenceIndex]}</animated.div>
    </div>
  )
}
export default CustomMessage