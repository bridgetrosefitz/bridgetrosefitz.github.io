import './tag.css'
import { VscGithubAlt } from 'react-icons/vsc'

const Tag = ({ img, name }) => {


    return (
      <span className='tag'>
        {name}
        {img}
      </span>
    )

}

export default Tag