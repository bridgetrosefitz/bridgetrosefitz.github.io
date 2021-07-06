import React, { useEffect, useRef } from 'react'
import { CubeTextureLoader } from 'three'
import * as dat from 'dat.gui'

const gui = new dat.GUI({ width: 500 })
const debugObject = {
  metalness: 1,
  roughness: 0.05
}

export const Spheres = () => {

  const sphere = useRef()
  const numberOfSpheres = 1
  // This link was somewhat helpful to get the texture loaded https://codeworkshop.dev/blog/2020-06-14-creating-a-skybox-with-reflections-in-react-three-fiber/
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


  const makeASphere = (index) => { 
    return (
    <mesh 
      key={index}
      ref={sphere}
      position={[0, 0, 0]}>
    <sphereGeometry args={[10, 100, 100]} />
    <meshStandardMaterial
      roughness={debugObject.roughness}
      metalness={debugObject.metalness}
          envMap={timesSquareEnvironmentMapTexture}
    />
  </mesh>) 
  }
  
  const multipleSpheres = new Array(numberOfSpheres).fill(0).map((value, index) => {
    
    return makeASphere(index)
  })

  useEffect(() => {
    gui.add(debugObject, 'metalness')
      .min(0.001)
      .max(1)
      .step(0.001)
      .onFinishChange(() => {  
        sphere.current.material.metalness = debugObject.metalness
        sphere.current.material.needsUpdate = true
      })

    gui.add(debugObject, 'roughness')
      .min(0.001)
      .max(1)
      .step(0.001)
      .onFinishChange(() => {
        sphere.current.material.roughness = debugObject.roughness
        sphere.current.material.needsUpdate = true
      })
  })

  return (
    <group>
      {multipleSpheres}
    </group>
  )
}
