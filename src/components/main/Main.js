import React, {Suspense, useState, useRef, useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Work from '../work/Work'
import { Sphere } from '../scene/Scene'
import { Plane } from '../scene/Scene'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { OrbitControls } from '@react-three/drei'



const Main = props => {
  const [city, setCity] = useState('Paris')
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']
  

  return (
    <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Localization/>
          <HeaderLarge cities={cities} setCity={setCity}/>
          <div id="canvas-container"/>
          <Canvas
            shadowMap
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 5, 5]} />
          <Physics gravity={[0, -20, 0]} defaultContactMaterial={{friction: 0.05, restitution: 0.3}}>
              <Sphere city={city} />
              <Plane />
            </Physics>
            <OrbitControls/>
            {/* <color attach='background' args={['pink']} /> */}
          </Canvas>
          <button onClick={() => props.history.push('/about')} className='about-button'>About</button>
          <HiOutlineArrowNarrowDown className='nav-arrow' />
          <Work />
        </Suspense>
    </div>
  );
}

export default Main
