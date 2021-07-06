import React, {useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Spheres from './components/spheres/Spheres'

function App() {
  const directionalLight = useRef()
  return (
    <div>
      <Header />
      <div id="canvas-container"/>
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 30] }}>
        <OrbitControls/>
        <ambientLight intensity={0.1} />
        <directionalLight ref={directionalLight} color="red" position={[0, 5, 5]} />
        {directionalLight.current && <directionalLightHelper ref={[directionalLight, 5]}/>}
        <Spheres/>
      </Canvas>
      <Main />
    </div>
  );
}

export default App;
