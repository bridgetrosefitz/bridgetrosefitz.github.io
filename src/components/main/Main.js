import React, {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Work from '../work/Work'
import { Sphere } from '../scene/Scene'
import { Plane } from '../scene/Scene'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { OrbitControls } from '@react-three/drei'
import './main.css'


const Main = props => {
  const [city, setCity] = useState('Paris')
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']

  return (
    <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Localization/>
          <HeaderLarge cities={cities} setCity={setCity}/>
          <Canvas
            style={{ position: 'fixed', height: '100%', width: '100%', top: 0, left: 0, zIndex: 0}}
            shadows
            camera={{ fov: 75, near: 0.1, far: 1000, position: [-3, 3, 60] }}>
          <ambientLight
            intensity={0.7}
          />
          <directionalLight
            castShadow
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
            shadow-camera-near={0.001}
            shadow-camera-far={1000}
            intensity={0.02}
            position={[1.5, 5, 1]}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <Physics gravity={[0, -120, 0]} defaultContactMaterial={{friction: 0.05, restitution: 0.3}}>
            {/* <Debug scale={1.1}> */}
              <Sphere city={city} />
              <Plane />
            {/* </Debug> */}
            </Physics>
            <OrbitControls
              minPolarAngle={Math.PI * 0.5}
              maxPolarAngle={Math.PI * 0.5}
              enableZoom={false}
            />
            {/* <color attach='background' args={['pink']} /> */}
          </Canvas>
          <div className='spacing-element' />
          <div className='main-content'>
            <button onClick={() => props.history.push('/about')} className='about-button'>About</button>
            <HiOutlineArrowNarrowDown className='nav-arrow' />
            <Work />
          </div>
        </Suspense>
    </>
  );
}

export default Main
