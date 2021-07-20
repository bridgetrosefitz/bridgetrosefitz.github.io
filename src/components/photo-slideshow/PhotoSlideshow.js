import './photo-slideshow.css'
import Arrow from '../arrow/Arrow'

const PhotoSlideshow = ({ onClick, photo }) => {

  return (

    <div class="photo-slideshow-container">
      <Arrow onClick={() => onClick('left')} />
      <Arrow onClick={() => onClick('right')} />
      <img alt='project-snapshot' src={photo}/>
    </div>

  )
}

export default PhotoSlideshow