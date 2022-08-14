import { useEffect, useState, useRef } from 'react'
import { Sphere, Plane, MakeAButtloadOfSpheres } from './Scene'
import { CubeTextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'

const Group = props => {
  const [showButtload, setShowButtload] = useState(false)
  const ref = useRef()

  const [melbourneEnvironmentMapTexture] = useLoader(CubeTextureLoader, [[
    'images/environment-maps/melbourne/px.png',
    'images/environment-maps/melbourne/nx.png',
    'images/environment-maps/melbourne/py.png',
    'images/environment-maps/melbourne/ny.png',
    'images/environment-maps/melbourne/pz.png',
    'images/environment-maps/melbourne/nz.png',
  ]])

  const [louvreEnvironmentMapTexture] = useLoader(CubeTextureLoader, [[
    'images/environment-maps/louvre/px.png',
    'images/environment-maps/louvre/nx.png',
    'images/environment-maps/louvre/py.png',
    'images/environment-maps/louvre/ny.png',
    'images/environment-maps/louvre/pz.png',
    'images/environment-maps/louvre/nz.png',
  ]])

  const [templeEnvironmentMapTexture] = useLoader(CubeTextureLoader, [[
    'images/environment-maps/inari-temple/px.png',
    'images/environment-maps/inari-temple/nx.png',
    'images/environment-maps/inari-temple/py.png',
    'images/environment-maps/inari-temple/ny.png',
    'images/environment-maps/inari-temple/pz.png',
    'images/environment-maps/inari-temple/nz.png',
  ]])

  const [timesSquareEnvironmentMapTexture] = useLoader(CubeTextureLoader, [[
    'images/environment-maps/times-square/px.png',
    'images/environment-maps/times-square/nx.png',
    'images/environment-maps/times-square/py.png',
    'images/environment-maps/times-square/ny.png',
    'images/environment-maps/times-square/pz.png',
    'images/environment-maps/times-square/nz.png',
  ]])

  const [norwayEnvironmentMapTexture] = useLoader(CubeTextureLoader, [[
    'images/environment-maps/norway/px.png',
    'images/environment-maps/norway/nx.png',
    'images/environment-maps/norway/py.png',
    'images/environment-maps/norway/ny.png',
    'images/environment-maps/norway/pz.png',
    'images/environment-maps/norway/nz.png',
  ]])

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

  useEffect(() => {

    if (showButtload === true) {
      setTimeout(() => {
        setShowButtload(false)
      }, 8000)
    }

  }, [showButtload])

  return(
    <group ref={ref}>
      {!showButtload && <Sphere cityTexture={setTexture(props.city)} onClick={() => setShowButtload(!showButtload)} />}
      <Plane />
      {showButtload && <MakeAButtloadOfSpheres cityTexture={melbourneEnvironmentMapTexture} number={100} />}
    </group>
  )
}

export default Group