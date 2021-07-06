import React, { useEffect, useRef } from 'react'
import { 
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
 } from 'three'
import { useThree, extend } from '@react-three/fiber'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as dat from 'dat.gui'

const gui = new dat.GUI({ width: 500 })
const debugObject = {
  metalness: 1,
  roughness: 0.1
}

export const Louvre = () => {
  
  const { scene } = useThree()
  const loader = new CubeTextureLoader()

  const texture = loader.load([
    '/environments/louvre/px.png',
    '/environments/louvre/nx.png',
    '/environments/louvre/py.png',
    '/environments/louvre/ny.png',
    '/environments/louvre/pz.png',
    '/environments/louvre/nz.png',
  ])

  scene.background = texture
  return null

}

export const Spheres = () => {

  const { scene } = useThree()

  const loader = new CubeTextureLoader()

  const environmentMapTexture = loader.load([
    '/environments/louvre/px.png',
    '/environments/louvre/nx.png',
    '/environments/louvre/py.png',
    '/environments/louvre/ny.png',
    '/environments/louvre/pz.png',
    '/environments/louvre/nz.png',
  ])

  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  })

  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget)
  cubeCamera.position.set(0, 100, 0)
  scene.add(cubeCamera)
  
  const sphere1 = useRef()
  const numberOfSpheres = 1;

  const makeASphere = (index) => { 
    return (
    <mesh 
      key={index}
      ref={sphere1}
      rotation={[Math.PI * Math.random(), Math.PI * 0.1, Math.PI * 0.25]}
      position={[(Math.random() - 0.5) * 50, 0, 0]}>
    <sphereGeometry args={[4, 100, 100]} />
    <meshStandardMaterial
      roughness={debugObject.roughness}
      metalness={debugObject.metalness}
      envMap={environmentMapTexture}
    />
  </mesh>) 
  }
  
  const multipleSpheres = new Array(numberOfSpheres).fill(0).map((value, index) => {
    
    return makeASphere(index)
  })

  // useEffect(() => {
  //   gui.add(debugObject, 'metalness')
  //     .min(0.001)
  //     .max(1)
  //     .step(0.001)
  //     .onFinishChange(() => {  
  //       sphere1.current.material.metalness = debugObject.metalness
  //       sphere1.current.material.needsUpdate = true
  //     })

  //   gui.add(debugObject, 'roughness')
  //     .min(0.001)
  //     .max(1)
  //     .step(0.001)
  //     .onFinishChange(() => {
  //       sphere1.current.material.roughness = debugObject.roughness
  //       sphere1.current.material.needsUpdate = true
  //     })
  // })

  return (
    <group>
      {multipleSpheres}
    </group>
  )
}
