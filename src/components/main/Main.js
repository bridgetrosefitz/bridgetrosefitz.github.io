import React, {Suspense, useState, useRef, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Work from '../work/Work'
import { Spheres } from '../spheres/Spheres'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'


const Main = props => {
  const [city, setCity] = useState('Paris')
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']
  const projects = useRef()

  const executeScroll = () => projects.current.scrollIntoView()

  useEffect(() => {
    
  })

  return (
    <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Localization/>
          <HeaderLarge cities={cities} setCity={setCity}/>
          <div id="canvas-container"/>
          <Canvas
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
            {/* <OrbitControls/> */}
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 5, 5]} />
            <Spheres city={city} />
          </Canvas>
          <button onClick={() => props.history.push('/about')} className='about-button'>About</button>
          <HiOutlineArrowNarrowDown className='nav-arrow' />
          <Work ref={projects}/>
        </Suspense>
    </div>
  );
}

export default Main
