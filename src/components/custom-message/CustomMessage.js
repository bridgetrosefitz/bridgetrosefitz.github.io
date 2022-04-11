import React, { useState } from 'react'
import './custom-message.css'
import { useSpring, animated, config } from 'react-spring'

const CustomMessage = () => {
  const [flip, setFlip] = useState(false)
    const props = useSpring({
     to: { opacity: 1 }, 
     from: { opacity: 0 }, 
     reset: true,
     reverse: flip,
     delay: 100,
     config: config.molasses,
     onRest: () => setFlip(!flip)
    })

  return (
    <div className='custom-message-container'>
      <animated.div className='custom-message' style={props}>Hi, Notion.</animated.div>
    </div>
  )
}
export default CustomMessage