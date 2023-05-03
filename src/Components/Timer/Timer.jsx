import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import img from '../../assets/images/counter-timer-img.png'
import Clock from '../Clock/Clock'
import style from './Timer.module.css'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const Timer = () => {
  return (
  <>
  <section className={style.timer}>
    <Container>
     <Row>
        <Col lg='6' md='6'>

            <div className='mt-5'>
                <h4 className='fs-5 text-white mb-2 '>Limited Offers</h4>
                <h3 className='fs-5 text-white my-3 mb-3'>Quality ArmChair</h3>
            </div>
<Clock/>

<motion.button whileHover={{scale:1.1}} className="buy-btn store-btn mt-5">
    <Link to='/shop' className='store-btn'>Visit Now</Link>
</motion.button>
        </Col>




        <Col lg='6' md='6' className='text-end'>
            <img className={style.image} src={img} alt="" />
            </Col>
     </Row>
    </Container>
  </section>
  
  
  </>
  )
}

export default Timer
