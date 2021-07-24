import './tag.css'

const Tag = ({ img, name, link, show }) => {


    return (
      <a 
        className='tag'
        href={link}
        rel='noreferrer'
        target='_blank'
        style={{ display: !show ? 'none' : '' }}
        >
        {img} 
        {name}
      </a>
    )

}

export default Tag