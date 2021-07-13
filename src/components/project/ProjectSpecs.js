import React from 'react'
import './project.css'
import { useTranslation } from 'react-i18next'

const ProjectSpecs = props => {
  const { t } = useTranslation()

  return(
    <div className='project-specs'>
      <p><b>Front end</b><span>{t(props.techStackFrontEnd)}</span></p>
      <p><b>Back end</b><span>{t(props.techStackBackEnd)}</span></p>
      <p>See it <a href={props.link} rel='noreferrer' target='_blank'>live</a> or view the <a href='http://bridgetro.se' rel='noreferrer' target='_blank'>user stories</a>, or <a href={props.github} rel='noreferrer' target='_blank'>code</a>
        .
        </p>
      <p className='project-summary'>{t(props.text)}</p>
    </div>
  )
}

export default ProjectSpecs