import React from 'react'
import Localization from '../localization/Localization'
import HeaderSmall from '../header/HeaderSmall'
import './about.css'

const About = props => {

  return(
    <>
    <Localization />
    <button onClick={() => props.history.push('/')} className='work-button'>Work</button>
    <HeaderSmall/>
      <h2 className='about-header' >About me</h2>
      <p className='about-p'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      <br/>
      <p className='about-p'>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      <div className='photo-of-me'>
        <img alt='Me at Trolltunga, Norway' src='/photos/Trolltunga.jpeg'/>
      </div>
      <h2 className='about-header'>My values (and things I'm figuring out)</h2>
      <p className='about-p'>
          <b>Make it ok to be wrong</b><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className='about-p'>
          <b>Be the one to change and be vulnerable</b><br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p className='about-p'>
          <b>Care about the people you work with</b><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className='about-p'>
          <b>People can change</b><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </>
  )
}

export default About