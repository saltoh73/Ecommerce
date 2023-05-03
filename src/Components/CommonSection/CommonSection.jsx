import React from 'react'
import { Container } from 'react-bootstrap'
import style from './CommonSection.module.css'

const CommonSection = ({title}) => {
  return (
    <section className={style.common_section}>
<Container className='text-center'>
<h1>{title}</h1>

</Container>
    </section>
  )
}

export default CommonSection
