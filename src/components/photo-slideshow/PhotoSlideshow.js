import './photo-slideshow.css'
import { useState } from 'react'
import Arrow from '../arrow/Arrow'

const PhotoSlideshow = ({ photos, arrowColor }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const changePhoto = direction => {
    const photosLastIndex = photos.length -1
    if(direction === 'left') {
      if (currentPhotoIndex === 0) {
        setCurrentPhotoIndex(photosLastIndex)
      } else {
        setCurrentPhotoIndex(currentPhotoIndex - 1)
      }
    } else if (direction === 'right') {
      if (currentPhotoIndex === photosLastIndex) {
        setCurrentPhotoIndex(0)
      } else {
        setCurrentPhotoIndex(currentPhotoIndex + 1)
      }
    }
  }

  return (
    <div class="photo-slideshow-container">
      <div className='slideshow-panel-left'/>
      <div className='slideshow-panel-right' />
      <Arrow slideshowArrow direction='left' color={arrowColor} onClick={() => changePhoto('left')} />
      <Arrow slideshowArrow direction='right' color={arrowColor} onClick={() => changePhoto('right')} />
      <img className='project-image' alt='project-snapshot' src={photos[currentPhotoIndex]}/>
    </div>
  )
}

export default PhotoSlideshow