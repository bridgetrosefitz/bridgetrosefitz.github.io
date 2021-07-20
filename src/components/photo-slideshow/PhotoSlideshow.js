import './photo-slideshow.css'
import Arrow from '../arrow/Arrow'

const PhotoSlideshow = (props) => {

  const changeImage = dir => {

  }

  return (

    <div class="photo-slideshow-container">
    <Arrow direction='left' />
    <Arrow direction='right' />
    <img alt='project-snapshot' src={props.project.photos[0]}/>
    </div>

  )
}

export default PhotoSlideshow