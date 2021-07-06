import React from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Spheres = () => {
  const [
    colorMap, 
    ambientOcclusionMap, 
    displacementMap, 
    normalMap, 
    roughnessMap] = useLoader(TextureLoader, ['Tiles105_1K_Color.png', 'Tiles105_1K_AmbientOcclusion.png', 'Tiles105_1K_Displacement.png', 'Tiles105_1K_Normal.png', 'Tiles105_1K_Roughness.png'])

  const numberOfSpheres = 4;



  const makeASphere = () => { 
    return (
    <mesh 
      rotation={[Math.PI * Math.random(), Math.PI * 0.1, Math.PI * 0.25]}
      position={[(Math.random() - 0.5) * 50, 0, 0]}>
    <sphereGeometry args={[4, 100, 100]} />
    <meshStandardMaterial
      map={colorMap}
      displacementMap={displacementMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={ambientOcclusionMap} />
  </mesh>) 
  }

  
  const multipleSpheres = new Array(numberOfSpheres).fill(0).map(() => makeASphere())

  return (
    <group>
      {multipleSpheres}
    </group>
  )
}

export default Spheres
