import { useEffect, useState, useRef } from 'react'
import { Sphere, Plane, MakeAButtloadOfSpheres } from './Scene'

const Group = props => {
  const [showButtload, setShowButtload] = useState(false)
  const ref = useRef()

  useEffect(() => {

    if (showButtload === true) {
      setTimeout(() => {
        setShowButtload(false)
      }, 8000)
    }

  }, [showButtload])

  return(
    <group ref={ref}>
      {!showButtload && <Sphere city={props.city} onClick={() => setShowButtload(!showButtload)} />}
      <Plane />
      {showButtload && <MakeAButtloadOfSpheres city={props.city} number={100} />}
    </group>
  )
}

export default Group