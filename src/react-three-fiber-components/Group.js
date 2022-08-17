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

  // Load low quality images using useLoader so that the mesh waits for images to be uploaded before rendering
  const [melbourneEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.melbourne])
  const [louvreEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.louvre])
  const [templeEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.temple])
  const [timesSquareEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.timesSquare])
  const [norwayEnvironmentMapTextureLowQuality] = useLoader(CubeTextureLoader, [environmentMapsLowQuality.norway])

  // Update the textureToUse based on which city is passed in, and use the low quality texture if the high quality one doesn't exist yet
  const setTexture = city => {
    let texture = melbourneTextureHighQuality || melbourneEnvironmentMapTextureLowQuality

    switch (city) {
      case 'Melbourne':
        texture = melbourneTextureHighQuality || melbourneEnvironmentMapTextureLowQuality
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

  // On first render (i.e. after the Group has first rendered), trigger the high quality images to load, and store them in state
  useEffect(() => {
    loader.load(environmentMapsHighQuality.melbourne, setMelbourneTextureHighQuality)
    loader.load(environmentMapsHighQuality.louvre, setLouvreTextureHighQuality)
    loader.load(environmentMapsHighQuality.timesSquare, setTimesSquareTextureHighQuality)
    loader.load(environmentMapsHighQuality.temple, setTempleTextureHighQuality)
    loader.load(environmentMapsHighQuality.norway, setNorwayTextureHighQuality)
  }, [])

  // When the high quality images are loaded, update the texture so that the high quality ones can be set this time
  useEffect(() => {
    setTexture(props.city)
    
  }, [melbourneTextureHighQuality, louvreTextureHighQuality, timesSquareTextureHighQuality, templeTextureHighQuality, norwayTextureHighQuality])

  // When the city changes from the user's mouse, update the texture
  useEffect(() => {
    setTexture(props.city)
  }, [props.city])

  // When the explosion of spheres happens, change it back to the single sphere after 8 seconds
  useEffect(() => {
    if (showButtload === true) {
      setTimeout(() => {
        setShowButtload(false)
      }, 8000)
    }

  }, [showButtload])

  return(
    <group ref={ref}>
      {!showButtload && <Sphere cityTexture={textureToUse} onClick={() => setShowButtload(!showButtload)} />}
      <Plane />
      {showButtload && <MakeAButtloadOfSpheres cityTexture={textureToUse} number={100} />}
    </group>
  )
}

export default Group