import './tag.css'

const Tag = ({ img, name, link }) => {


    return (
      <a 
        className='tag'
        href={link}
        rel='noreferrer'
        target='_blank'
        >
        {name}
        {img} 
      </a>
    )

}

export default Tag