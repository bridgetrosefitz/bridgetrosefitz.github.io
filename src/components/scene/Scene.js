import React from 'react'
import { CubeTextureLoader } from 'three'
import { useFrame } from '@react-three/fiber'
import { useSphere, usePlane} from '@react-three/cannon'

const sphereMetalness = 1
const sphereRoughness = 0.05

const clickableSphereXCoordinate = 0
const clickableSphereZCoordinate = 0

const loader = new CubeTextureLoader()


const melbourneEnvironmentMapTexture = loader.load([
  '/environments/melbourne/px.png',
  '/environments/melbourne/nx.png',
  '/environments/melbourne/py.png',
  '/environments/melbourne/ny.png',
  '/environments/melbourne/pz.png',
  '/environments/melbourne/nz.png',
])


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

export const ClickableSphere = props => {
  // This guy has no physics attached to him, because he stays fixed
  return (
    <mesh
      {...props}
      position={[clickableSphereXCoordinate + 19, 12, clickableSphereZCoordinate + 10]}>
      <sphereGeometry args={[1.5, 100, 100]} />
      <meshStandardMaterial
        roughness={0.05}
        metalness={1}
        envMap={setTexture(props.city)}
      />
    </mesh>
  )
}

const planeMiddlePositionY = 14.5

export const Sphere = props => {

  const [spherePhysicsRef, api] = useSphere(() => ({ mass: 10, position: [0, 30, 0], args: [3]}))

  return (
      <mesh
        castShadow
        ref={spherePhysicsRef}
        position={[0, 30, 0]}>
          <sphereGeometry args={[3, 100, 100]} />
          <meshStandardMaterial
          roughness={sphereRoughness}
          metalness={sphereMetalness}
          envMap={setTexture(props.city)}
          />
      </mesh>
  )
}

// export const SpheresAtBottom = props => {
//   const sphereAtBottom1Position = [0, -15, 0]
//   const [sphereAtBottomPhysicsRef, api] = useSphere(() => ({ mass: 2, position: sphereAtBottom1Position, args: 1 }))

//   return (
//       <mesh
//         castShadow
//         ref={sphereAtBottomPhysicsRef}
//         position={sphereAtBottom1Position}>
//         <sphereGeometry args={[1, 100, 100]} />
//         <meshStandardMaterial
//           roughness={debugObject.roughness}
//           metalness={debugObject.metalness}
//           envMap={setTexture(props.city)}
//         />
//       </mesh>
//   )
// }

export const PlaneMiddle = () => {
  const [planePhysicsRef] = usePlane(() => ({ mass: 0, position: [0, planeMiddlePositionY, 0], rotation: [-Math.PI * 0.5, 0, 0] }))
    return(
      <mesh 
        receiveShadow
        ref={planePhysicsRef} 
        position={[0, planeMiddlePositionY, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}  >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial color="#171717" opacity={0.1} />
    </mesh>
    )
}

export const MakeAButtloadOfSpheres = ({number, city}) => {
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
        roughness={sphereRoughness}
        metalness={sphereMetalness}
        envMap={setTexture(city)} />
    </instancedMesh>
  )
}

