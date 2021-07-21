import './arrow.css'

const Arrow = ({direction, onClick}) => {

  return(
    <div className='arrow-positioning-context'>
      <div className={`${direction} nav-arrow`} onClick={onClick}>
      <div className={`${direction} nav-arrow-left-tip`}></div>
      <div className={`${direction} nav-arrow-right-tip`}></div>
      </div>
    </div>
  )
}

export default Arrow