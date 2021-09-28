import './arrow.css'

const returnArrows = (direction, color) => {
  return (
    <>
      <div
        className={`${direction} ${color}-arrow nav-arrow-left-tip`} />
      <div
        className={`${direction} ${color}-arrow nav-arrow-right-tip`} />
    </>
    )
}

const Arrow = ({direction, onClick, type, color, slideshowArrow, arrowHeightClass }) => {

  return(
    <>
      <div 
        className={` ${slideshowArrow ? `slideshow-arrow-${direction}` : ''} ${direction} ${color}-arrow nav-arrow ${arrowHeightClass}`} 
        onClick={onClick}>
        {type === 'circle-background' ? <div className={`arrow-circle arrow-circle-${direction}`}>{returnArrows(direction, color)}</div> : returnArrows(direction, color)}
      </div>
    </>
  )
}

export default Arrow