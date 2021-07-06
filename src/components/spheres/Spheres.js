import React from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Spheres = () => {
  // const [colorMap] = useLoader(TextureLoader, ['PavingStones092_1K_Color.jpg'])

  return (
    <mesh>
      <sphereGeometry args={[8, 32, 32]}/>
      <meshPhongMaterial />
    </mesh>
  )
}

export default Spheres
