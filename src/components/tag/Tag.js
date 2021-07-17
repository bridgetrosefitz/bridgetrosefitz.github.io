import './tag.css'
import { VscGithubAlt } from 'react-icons/vsc'

const Tag = ({ img, name }) => {


    return (
      <button className='tag'>
        {name}
        {img}
      </button>
    )

}

export default Tag