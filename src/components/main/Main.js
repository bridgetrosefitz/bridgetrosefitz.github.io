import React, { useState, useRef } from 'react'
import './main.css'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import Localization from '../localization/Localization'
import HeaderLarge from '../header/HeaderLarge'
import Group from '../group/Group'
import Work from '../work/Work'
import { iconsGroup } from '../footer/Footer'
import Footer from '../footer/Footer'
import Arrow from '../arrow/Arrow'
import { OrbitControls } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import CustomMessage from '../custom-message/CustomMessage'

const Main = props => {
  const { t } = useTranslation()
  const [city, setCity] = useState('Melbourne')
  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']
  const workRef = useRef()

  return (
    <>
      <Localization {...props}/>
      <CustomMessage/>
      {/* <div className='external-links'>
        {iconsGroup}
      </div> */}
      <button className='side-button' onClick={() => props.history.push('/about')}>
        {t('main.About')}
      </button>
      <HeaderLarge cities={cities} city={city} setCity={setCity}/>
      <Canvas
        style={{ position: 'absolute', height: '100vh', width: '100%', top: 0, left: 0}}
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
      <Physics gravity={[0, -120, 0]} defaultContactMaterial={{friction: 0.05, restitution: 0.5}}>
        <Group city={city}/>
      </Physics>
        <OrbitControls
          minPolarAngle={Math.PI * 0.5}
          maxPolarAngle={Math.PI * 0.5}
          enableZoom={false}
        />
      </Canvas>
      <div className='spacing-element-for-canvas'>
      </div>
      <div className='main-content'>
        <div className='arrow-positioning-context'>
          <Arrow color='black' direction='down' onClick={() => {workRef.current.scrollIntoView()}}/>
        </div>
        <div className='spacing-element-between-arrow-and-logos'></div>
        <Work workRef={workRef} />
      </div>
      <Footer/>
    </>
  );
}

export default Main
