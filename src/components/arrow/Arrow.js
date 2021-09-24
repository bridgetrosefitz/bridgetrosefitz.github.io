import './arrow.css'

const Arrow = ({direction, onClick, type, color, slideshowArrow, arrowHeightClass }) => {

  return(
    <>
      <div 
        className={` ${slideshowArrow ? `slideshow-arrow-${direction}` : ''} ${direction} ${color}-arrow nav-arrow ${arrowHeightClass}`} 
        onClick={onClick}>
        {/* {type === 'background-circle' ? } */}

        <div 
          className={`${direction} ${color}-arrow nav-arrow-left-tip`}/>
        <div 
          className={`${direction} ${color}-arrow nav-arrow-right-tip`}/>
      </div>
    </>
  )
}

export default Arrow