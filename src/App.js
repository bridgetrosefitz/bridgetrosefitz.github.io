import React, {Suspense, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Localization from './components/localization/Localization'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { Spheres } from './components/spheres/Spheres'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'


function App() {
  const [city, setCity] = useState('Paris')

  const cities = ['Melbourne', 'NYC', 'Paris', 'Tokyo', 'Oslo']

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Localization/>
        <Header cities={cities} setCity={setCity}/>
        <div id="canvas-container"/>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
          {/* <OrbitControls/> */}
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 5, 5]} />
          <Spheres city={city} />
        </Canvas>
        <HiOutlineArrowNarrowDown className='nav-arrow' />
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
