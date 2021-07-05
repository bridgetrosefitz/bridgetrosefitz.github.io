import './main.css'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'

const NavArrow = () => {

  return ( 
    <div className='nav-arrow'>
      <HiOutlineArrowNarrowDown />
    </div>
  )
}

const Main = () => {


  return (
    <NavArrow/>
  )
}

export default Main