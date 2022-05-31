import React from 'react'
import { CubeTextureLoader } from 'three'
import { useSphere, usePlane} from '@react-three/cannon'
import { Html } from '@react-three/drei'

const sphereMetalness = 1
const sphereRoughness = 0.05
const sphereRadius = 10
const spherePosition = [0, 30, 0]
const planePosition = [0, -12, 0]
const loader = new CubeTextureLoader()

const melbourneEnvironmentMapTexture = loader.load([
  'images/environment-maps/melbourne/px.png',
  'images/environment-maps/melbourne/nx.png',
  'images/environment-maps/melbourne/py.png',
  'images/environment-maps/melbourne/ny.png',
  'images/environment-maps/melbourne/pz.png',
  'images/environment-maps/melbourne/nz.png',
])

const louvreEnvironmentMapTexture = loader.load([
  'images/environment-maps/louvre/px.png',
  'images/environment-maps/louvre/nx.png',
  'images/environment-maps/louvre/py.png',
  'images/environment-maps/louvre/ny.png',
  'images/environment-maps/louvre/pz.png',
  'images/environment-maps/louvre/nz.png',
])

const templeEnvironmentMapTexture = loader.load([
  'images/environment-maps/inari-temple/px.png',
  'images/environment-maps/inari-temple/nx.png',
  'images/environment-maps/inari-temple/py.png',
  'images/environment-maps/inari-temple/ny.png',
  'images/environment-maps/inari-temple/pz.png',
  'images/environment-maps/inari-temple/nz.png',
])

const timesSquareEnvironmentMapTexture = loader.load([
  'images/environment-maps/times-square/px.png',
  'images/environment-maps/times-square/nx.png',
  'images/environment-maps/times-square/py.png',
  'images/environment-maps/times-square/ny.png',
  'images/environment-maps/times-square/pz.png',
  'images/environment-maps/times-square/nz.png',
])

const norwayEnvironmentMapTexture = loader.load([
  'images/environment-maps/norway/px.png',
  'images/environment-maps/norway/nx.png',
  'images/environment-maps/norway/py.png',
  'images/environment-maps/norway/ny.png',
  'images/environment-maps/norway/pz.png',
  'images/environment-maps/norway/nz.png',
])

const setTexture = city => {

  let textureToUse = melbourneEnvironmentMapTexture

  switch (city) {
    case 'Melbourne':
      textureToUse = melbourneEnvironmentMapTexture
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
      textureToUse = melbourneEnvironmentMapTexture
      break
  }

  return textureToUse
}

export const Sphere = props => {

  const [spherePhysicsRef] = useSphere(() => ({ 
    mass: 10, 
    position: spherePosition, 
    args: [sphereRadius]
  }))

  return (
    <mesh
      {...props}
      castShadow
      ref={spherePhysicsRef}
      position={spherePosition}>
      <sphereGeometry args={[sphereRadius, 100, 100]} />
      <meshStandardMaterial
      roughness={sphereRoughness}
      metalness={sphereMetalness}
      envMap={setTexture(props.city)}
      />
      <Html distanceFactor={800}>
        <div onClick={props.onClick} style={{ height: sphereRadius * 2, width: sphereRadius * 2}} className='sphereHtml'/>
      </Html>
    </mesh>
  )
}

export const Plane = () => {
  const windowInnerWidth = window.innerWidth
  const windowInnerHeight = window.innerHeight
  let sizeAdjuster = windowInnerWidth / windowInnerHeight
  if (windowInnerWidth <= 480) {
    sizeAdjuster *= 1.5
  } else if (windowInnerWidth > 1440) {
    sizeAdjuster *= 1
  }
  const [planePhysicsRef] = usePlane(() => ({ 
    mass: 0, 
    position: [planePosition[0], sizeAdjuster + planePosition[1], planePosition[2]], 
    rotation: [-Math.PI * 0.5, 0, 0] 
  }))

  return(
    <mesh 
      receiveShadow
      ref={planePhysicsRef} 
      position={[planePosition[0], sizeAdjuster + planePosition[1], planePosition[2]]}
      rotation={[Math.PI * 0.5, 0, 0]} >
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" opacity={0.1} />
  </mesh>
  )
}

export const MakeAButtloadOfSpheres = ({number, city}) => {
  const radius = 0.5
  const [ref] = useSphere(() => ({
    mass: 10, 
    material: { friction: 0.02, restitution: 5 },
    position: [
      (Math.random() - 0.5) * 0.5 + spherePosition[0], 
      (Math.random() - 0.5) * (planePosition[1] + (sphereRadius * 0.5)), 
      (Math.random() - 0.5) + spherePosition[2] - 2],
    args: radius
  }))
  
  return (
    <instancedMesh
      castShadow
      ref={ref}
      args={[null, null, number]}>
      <sphereBufferGeometry args={[radius, 100, 100]}/>
      <meshStandardMaterial
        roughness={sphereRoughness}
        metalness={sphereMetalness}
        envMap={setTexture(city)} />
    </instancedMesh>
  )
}

