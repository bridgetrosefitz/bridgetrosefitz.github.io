import './arrow.css'

const Arrow = props => {

  console.log(props)
  return(
    <>
    <div className='nav-arrow' onClick={() => props.workRef.current.scrollIntoView()}>
      <div className='nav-arrow-left-tip'></div>
      <div className='nav-arrow-right-tip'></div>
      </div>
    </>
  )
}

export default Arrow