import React, {useEffect, useMemo} from 'react'
import { CubeTextureLoader } from 'three'
import { useFrame} from '@react-three/fiber'
import { useSphere, usePlane,} from '@react-three/cannon'

// const gui = new dat.GUI({ width: 500 })
const debugObject = {
  metalness: 1,
  roughness: 0.05
}

const clickableSphereXCoordinate = 0
const clickableSphereZCoordinate = 0

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

const setTexture = (city) => {

  let textureToUse = louvreEnvironmentMapTexture

  switch (city) {
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

  return textureToUse
}

export const Sphere = props => {

  const [spherePhysicsRef, api] = useSphere(() => ({ mass: 10, position: [0, 60, -1], args: [5]}))

  return (
      <mesh
        castShadow
        ref={spherePhysicsRef}
        position={[0, 60, 0]}>
          <sphereGeometry args={[5, 100, 100]} />
          <meshStandardMaterial
            roughness={debugObject.roughness}
            metalness={debugObject.metalness}
            envMap={setTexture(props.city)}
          />
      </mesh>
  )
}

export const ClickableSphere = props => {
  // This guy has no physics attached to him, because he stays fixed
  return (
    <mesh
      {...props}
      position={[clickableSphereXCoordinate+19, 12, clickableSphereZCoordinate+10 ]}>
      <sphereGeometry args={[1.5, 100, 100]} />
      <meshStandardMaterial
        roughness={0.05}
        metalness={1}
        envMap={setTexture(props.city)}
      />
    </mesh>
  )
}


export const Plane = () => {
  const [planePhysicsRef] = usePlane(() => ({ mass: 0, position: [0, -8, 0], rotation: [-Math.PI * 0.5, 0, 0] }))
    return(
      <mesh 
        receiveShadow
        ref={planePhysicsRef} 
        position={[0, -8, 0]} 
        rotation={[-Math.PI * 0.5, 0, 0]}  >
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" opacity={0.1} />
    </mesh>
    )
}

export const MakeAButtloadOfSpheres = ({number}) => {
  const radius = .5
  const [ref, api] = useSphere(() => ({
    mass: 10, 
    position: [(Math.random() - 0.5)*0.5 + clickableSphereXCoordinate, Math.random() * 20, (Math.random() - 0.5) + clickableSphereZCoordinate -2],
    args: radius
  }))
  // useFrame(() => api.at(Math.floor(Math.random() * number)).position.set((Math.random() - 0.5) * 0.5 + clickableSphereXCoordinate, Math.random() * 20, (Math.random() - 0.5) + clickableSphereZCoordinate - 2))
  useFrame(() => api.at(Math.floor(Math.random() * number)).position.set((Math.random() - 0.5) * 5 + clickableSphereXCoordinate, Math.random() * 20, (Math.random() - 0.5) *5 + clickableSphereZCoordinate - 2))
  // useEffect(() => {
  //   ref.current.count = number
  //   ref.current.matrixWorldNeedsUpdate = true
  //   ref.current.material.needsUpdate = true
  //   window.test = ref.current
// }, [number] )
  return (
    <instancedMesh
      castShadow
      ref={ref}
      args={[null, null, number]}>
      <sphereBufferGeometry args={[radius, 100, 100]}/>
      <meshStandardMaterial
        roughness={debugObject.roughness}
        metalness={debugObject.metalness}
        envMap={setTexture('Paris')} />
    </instancedMesh>
  )
}

