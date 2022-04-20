import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'

const useWidth = () => {
  const initialWidth = 0
  const ref = useRef(null)
  const [width, setWidth] = useState(initialWidth)
  const widthRef = useRef(initialWidth)
  const [resizeObserver] = useState(
    () =>
      new ResizeObserver(packet => {
        if (ref.current && widthRef.current !== ref.current.offsetWidth) {
          console.log('inside observer width:', ref.current.offsetWidth)
          widthRef.current = ref.current.offsetWidth;
          setWidth(ref.current.offsetWidth);
        }
      })
  );

  useLayoutEffect(() => {
    if(ref.current) {
      resizeObserver.observe(ref.current, {});
      setWidth(ref.current.offsetWidth)
    }
    return () => resizeObserver.disconnect();
  }, [ref.current])

  return [ref, width]
}

const CustomMessage = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [maxSentenceIndex, setMaxSentenceIndex] = useState(8)
  const [widthRef, width] = useWidth()
  console.log(width)
  const props = useSpring({
    from: { opacity: 0, width: 0 },
    to: { opacity: 1, width: width },
    loop: { reverse: true },
    config: config.molasses,
  })

  const allowableNames = ["notion", "google", "apple", "slack"]

  const generateNameForMessage = (path) => {
    const lowerCase = path.split("/").slice(-1)[0]
    if(allowableNames.includes(lowerCase)) {
      const properCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
      return properCase
    } else return "there"
  }

  // If you add a new sentence, remember to update maxSentenceIndex

  const sentences = [
    // `Hi, ${generateNameForMessage(window.location.href)}.`,
    "Welcome to my site.",
    "It's lovely to have you here.",
    "You can browse my projects below.",
    "And see my process to build them, including user stories and ERDs.",
    "I taught myself React-Three-Fiber (Three.js) to make this site.",
    "I'd love to chat more about how I built it.",
    "Just let me know :)",
    "Most of all, I hope you enjoy having a look around.",
  ]

  useEffect(() => {
    const interval = setInterval(() => setSentenceIndex(prevSentenceIndex => {
      return prevSentenceIndex <= maxSentenceIndex ? prevSentenceIndex + 1 : prevSentenceIndex}), 5000)
    return () => clearInterval(interval)
  }, [])

  if(widthRef.current) {
    console.log('Width REF:', widthRef.current.offsetWidth)
  }
  return (
    <div className='custom-message-container'>
        <animated.div 
          className={`custom-message ${sentenceIndex > maxSentenceIndex ? 'custom-message-hide' : ''}`} 
        style={{ ...props, overflow: 'hidden'}}
        >
          <span className='custom-message-text' ref={widthRef}>
            {sentences[sentenceIndex]}
          </span>
        </animated.div>
    </div>
  )
}
export default CustomMessage