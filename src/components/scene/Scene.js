import React from 'react'
import { CubeTextureLoader } from 'three'
import { useFrame } from '@react-three/fiber'
import { useSphere, usePlane } from '@react-three/cannon'

// const gui = new dat.GUI({ width: 500 })
const debugObject = {
  metalness: 1,
  roughness: 0.05
}

export const Sphere = props => {

  const [spherePhysicsRef, api] = useSphere(() => ({ mass: 10, position: [0, 20, -1], args: 12}))
  
  const loader = new CubeTextureLoader()

  const louvreEnvironmentMapTexture = loader.load([
    '/environments/louvre/px.png',
    '/environments/louvre/nx.png',
    '/environments/louvre/py.png',
    '/environments/louvre/ny.png',
    '/environments/louvre/pz.png',
    '/environments/louvre/nz.png',
  ])

  const templeEnvironmentMapTexture = loader.load([
    '/environments/inari-temple/px.png',
    '/environments/inari-temple/nx.png',
    '/environments/inari-temple/py.png',
    '/environments/inari-temple/ny.png',
    '/environments/inari-temple/pz.png',
    '/environments/inari-temple/nz.png',
  ])

  const timesSquareEnvironmentMapTexture = loader.load([
    '/environments/times-square/px.png',
    '/environments/times-square/nx.png',
    '/environments/times-square/py.png',
    '/environments/times-square/ny.png',
    '/environments/times-square/pz.png',
    '/environments/times-square/nz.png',
  ])

  const norwayEnvironmentMapTexture = loader.load([
    '/environments/norway/px.png',
    '/environments/norway/nx.png',
    '/environments/norway/py.png',
    '/environments/norway/ny.png',
    '/environments/norway/pz.png',
    '/environments/norway/nz.png',
  ])

  let textureToUse = louvreEnvironmentMapTexture

    switch (props.city) {
      case 'Melbourne':
        textureToUse = louvreEnvironmentMapTexture
        break
      case 'NYC':
        textureToUse = timesSquareEnvironmentMapTexture
        break
      case 'Paris':
        textureToUse = louvreEnvironmentMapTexture
        break
      case 'Tokyo':
        textureToUse = templeEnvironmentMapTexture
        break
      case 'Oslo':
        textureToUse = norwayEnvironmentMapTexture
      break
      default:
        textureToUse = louvreEnvironmentMapTexture
        break
    }

  return (
    <group>
      <mesh
        castShadow
        ref={spherePhysicsRef}
        position={[0, 20, 0]}>
        <sphereGeometry args={[12, 100, 100]} />
        <meshStandardMaterial
          roughness={debugObject.roughness}
          metalness={debugObject.metalness}
          envMap={textureToUse}
        />
      </mesh>
    </group>
  )
}


export const Plane = () => {
  const [planePhysicsRef] = usePlane(() => ({ mass: 0, position: [0, -15, 0], rotation: [-Math.PI * 0.5, 0, 0] }))
    return(
      <mesh ref={planePhysicsRef} position={[0, -15, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" />
    </mesh>
    )
}
