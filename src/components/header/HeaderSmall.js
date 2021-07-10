import React from 'react'

const HeaderSmall = props => {

  return(
    <h1 className='header-small' onClick={() => props.history.push('/')}>Bridget Fitzgerald</h1>
  )
}

export default HeaderSmall