import { useEffect, useState, useRef } from 'react'
import { Sphere, Plane, MakeAButtloadOfSpheres } from './Scene'
import { CubeTextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import { environmentMapsHighQuality, environmentMapsLowQuality } from '../env-maps'


const Group = props => {
  const [showButtload, setShowButtload] = useState(false)
  const [textureToUse, setTextureToUse] = useState()
  const [melbourneTextureHighQuality, setMelbourneTextureHighQuality] = useState()
  const [louvreTextureHighQuality, setLouvreTextureHighQuality] = useState()
  const [timesSquareTextureHighQuality, setTimesSquareTextureHighQuality] = useState()
  const [templeTextureHighQuality, setTempleTextureHighQuality] = useState()
  const [norwayTextureHighQuality, setNorwayTextureHighQuality] = useState()
  const ref = useRef()

  const loader = new CubeTextureLoader()

  useEffect(() => {
    setTexture(props.city)
    loader.load(environmentMapsHighQuality.melbourne, setMelbourneTextureHighQuality)
    loader.load(environmentMapsHighQuality.louvre, setLouvreTextureHighQuality)
    loader.load(environmentMapsHighQuality.timesSquare, setTimesSquareTextureHighQuality)
    loader.load(environmentMapsHighQuality.temple, setTempleTextureHighQuality)
    loader.load(environmentMapsHighQuality.norway, setNorwayTextureHighQuality)
  }, [])

  useEffect(() => {

    setTexture(props.city)
    
  }, [melbourneTextureHighQuality, louvreTextureHighQuality, timesSquareTextureHighQuality, templeTextureHighQuality, norwayTextureHighQuality])

  const [melbourneEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.melbourne])
  const [louvreEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.louvre])
  const [templeEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.temple])
  const [timesSquareEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.timesSquare])
  const [norwayEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.norway])

  const setTexture = city => {

    let texture = melbourneTextureHighQuality || melbourneEnvironmentMapTextureLowQuality

    switch (city) {
      case 'Melbourne':
        texture = melbourneEnvironmentMapTextureLowQuality
        break
      case 'NYC':
        texture = timesSquareTextureHighQuality || timesSquareEnvironmentMapTextureLowQuality
        break
      case 'Paris':
        texture = louvreTextureHighQuality || louvreEnvironmentMapTextureLowQuality
        break
      case 'Tokyo':
        texture = templeTextureHighQuality || templeEnvironmentMapTextureLowQuality
        break
      case 'Oslo':
        texture = norwayTextureHighQuality || norwayEnvironmentMapTextureLowQuality
        break
      default:
        texture = melbourneTextureHighQuality || melbourneEnvironmentMapTextureLowQuality
        break
    }

    setTextureToUse(texture)
  }

  useEffect(() => {

    if (showButtload === true) {
      setTimeout(() => {
        setShowButtload(false)
      }, 8000)
    }

  }, [showButtload])

  useEffect(() => {
    setTexture(props.city)
  }, [])

  return(
    <group ref={ref}>
      {!showButtload && <Sphere cityTexture={textureToUse} onClick={() => setShowButtload(!showButtload)} />}
      <Plane />
      {showButtload && <MakeAButtloadOfSpheres cityTexture={textureToUse} number={100} />}
    </group>
  )
}

export default Group