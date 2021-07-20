import './arrow.css'

const Arrow = props => {

  return(
    <>
    <div className='nav-arrow' onClick={props.onClick}>
      <div className='nav-arrow-left-tip'></div>
      <div className='nav-arrow-right-tip'></div>
      </div>
    </>
  )
}

export default Arrow