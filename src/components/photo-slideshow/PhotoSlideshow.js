import './photo-slideshow.css'
import { useState } from 'react'
import Arrow from '../arrow/Arrow'
import MockBrowser from '../mock-browser/MockBrowser'

const PhotoSlideshow = ({ dataAos, dataAosDuration, photos, arrowColor }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const altText = photos[currentPhotoIndex]
    .split(`-${currentPhotoIndex + 1}-`)[1]
    .split('.')[0]

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
    <div 
      data-aos={dataAos} 
      data-aos-duration={dataAosDuration} 
      className="photo-slideshow-container">
      <div className='slideshow-panel-left'/>
      <div className='slideshow-panel-right' />
      <Arrow 
        slideshowArrow 
        direction='left' 
        arrowHeightClass={photos[currentPhotoIndex].split(".")[1] === 'png' ? 'nav-arrow-container-height-full' : 'nav-arrow-container-height-small'} 
        color={arrowColor} onClick={() => changePhoto('left')} />
      <Arrow 
        slideshowArrow 
        direction='right'
        arrowHeightClass={photos[currentPhotoIndex].split(".")[1] === 'png' ? 'nav-arrow-container-height-full' : 'nav-arrow-container-height-small'}
        color={arrowColor} 
        onClick={() => changePhoto('right')} />
      <MockBrowser 
        image={photos[currentPhotoIndex]} 
        alt={altText}/>
    </div>
  )
}

export default PhotoSlideshow