import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import style from './Services.module.css'
import serviessDate from '../../assets/data/serviceData'


const Services = () => {
  return (
  <section className={style.servies}>
    <Container>
        <Row>
{
    serviessDate.map((item,index)=>
        <Col lg='3' md='4' key={index}>
    <motion.div whileHover={{scale:1.1}} className={style.servies__items} style={{background:`${item.bg}`}}>
        <span><i class={item.icon}></i></span>
        <div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
        </div>
    </motion.div>
    </Col>
    )
    
}







        </Row>
    </Container>
  </section>
  )
}

export default Services
