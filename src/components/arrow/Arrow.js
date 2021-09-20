import './arrow.css'

const Arrow = ({direction, onClick, color, slideshowArrow, arrowHeightClass }) => {

  return(
    <>
      <div 
        className={` ${slideshowArrow ? `slideshow-arrow-${direction}` : ''} ${direction} ${color}-arrow nav-arrow ${arrowHeightClass}`} 
        onTouchStart={onClick} 
        onClick={onClick}>
        <div 
          className={`${direction} ${color}-arrow nav-arrow-left-tip`}/>
        <div 
          className={`${direction} ${color}-arrow nav-arrow-right-tip`}/>
      </div>
    </>
  )
}

export default Arrow