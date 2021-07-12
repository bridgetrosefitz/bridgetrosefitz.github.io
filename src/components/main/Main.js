import React, { useState, useLayoutEffect, useRef } from 'react'
import './main.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, Debug } from '@react-three/cannon'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Work from '../work/Work'
import Footer from '../footer/Footer'
import { Sphere } from '../scene/Scene'
import { SpheresAtBottom } from '../scene/Scene'
import { ClickableSphere } from '../scene/Scene'
import { MakeAButtloadOfSpheres } from '../scene/Scene'
import { PlaneMiddle } from '../scene/Scene'
import { PlaneBottom } from '../scene/Scene'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import { OrbitControls } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import { PerspectiveCamera } from 'three'

const Main = props => {
  const { t } = useTranslation()
  const [city, setCity] = useState('Melbourne')
  const [showButtload, setShowButtload] = useState(false)
  const [scrollHeight, setScrollHeight] = useState(document.body.scrollHeight)
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']
  const projectsRef = useRef()


  const scrollToProjects = () => projectsRef.current.scrollIntoView()

  useLayoutEffect(() => {
    setScrollHeight(document.body.scrollHeight)
  })

  const footerHeight = 150;

  return (
    <>
      <Localization {...props}/>
      <HeaderLarge cities={cities} setCity={setCity}/>
      <Canvas
        style={{ position: 'absolute', height: scrollHeight+footerHeight, width: '100%', top: 0, left: 0, zIndex: showButtload ? 1 : 0}}
        shadows
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 50, 40] }}>
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
        position={[1.5, 100, 1]}
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
        <PlaneMiddle />
        {/* <PlaneBottom /> */}
        {/* <SpheresAtBottom city={city}/> */}
        {/* </Debug> */}
        </Physics>
        <OrbitControls
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.25}
          enableZoom={false}
        />
      </Canvas>
      <div className='spacing-element-for-canvas'>
        <button className='about-button' onClick={() => props.history.push('/about')}>
          {t('main.About')}
        </button>
      </div>
      <div className='main-content'>
        <div className='nav-arrow' onClick={() => scrollToProjects()}>
          <div className='nav-arrow-left-tip'></div>
          <div className='nav-arrow-right-tip'></div>
        </div>
        <Work projectsRef={projectsRef} scrollToProjects={scrollToProjects}/>
      </div>
      <Footer/>
    </>
  );
}

export default Main
