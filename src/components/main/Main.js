import React, {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Work from '../work/Work'
import { Sphere } from '../scene/Scene'
import { ClickableSphere } from '../scene/Scene'
import { MakeAButtloadOfSpheres } from '../scene/Scene'
import { Plane } from '../scene/Scene'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { OrbitControls } from '@react-three/drei'
import './main.css'


const Main = props => {
  const [city, setCity] = useState('Paris')
  const [showButtload, setShowButtload] = useState(false)
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']


  return (
    <>
      <Localization {...props}/>
      <HeaderLarge cities={cities} setCity={setCity}/>
      <Canvas
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0, left: 0, zIndex: showButtload ? 1 : 0}}
        shadows
        camera={{ fov: 29, near: 0.1, far: 1000, position: [-3, 3, 60] }}>
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
        {!showButtload && <Sphere city={city} />}
          <ClickableSphere city={city} onClick={() => setShowButtload(!showButtload)} />
          {showButtload && <MakeAButtloadOfSpheres city={city} number={100} />}
          <Plane />
        {/* </Debug> */}
        </Physics>
        <OrbitControls
          minPolarAngle={Math.PI * 0.5}
          maxPolarAngle={Math.PI * 0.5}
          enableZoom={false}
        />
      </Canvas>
      <div className='spacing-element'><button className='about-button' onClick={() => props.history.push('/about')} >About</button>
      </div>
      <div className='main-content'>
        <HiOutlineArrowNarrowDown className='nav-arrow' />
        <Work />
      </div>
    </>
  );
}

export default Main
