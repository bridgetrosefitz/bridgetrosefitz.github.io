import './arrow.css'

const Arrow = ({direction, onClick, color, slideshowArrow }) => {

  return(
    <>
      <div className={` ${slideshowArrow ? `slideshow-arrow-${direction}` : null} ${direction} ${color}-arrow nav-arrow`} onClick={onClick}>
        <div className={`${direction} ${color}-arrow nav-arrow-left-tip`}></div>
        <div className={`${direction} ${color}-arrow nav-arrow-right-tip`}></div>
      </div>
    </>
  )
}

export default Arrow