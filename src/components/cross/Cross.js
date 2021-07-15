import './cross.css'

const Cross = props => {
  return(
  <div className='close-icon' onClick={props.onClose}>
    <div className='close-left'></div>
    <div className='close-right'></div>
  </div>
  )
}

export default Cross