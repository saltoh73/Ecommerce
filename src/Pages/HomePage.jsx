import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  img  from '../assets/images/hero-img.png'
import { motion } from "framer-motion"

const HomePage = () => {


const year = new Date().getFullYear() 
   
   return (

<>

<section className='hero mt-2 mb-5'>
     <Container>
       <Row className='pt-5'>
       <Col lg='6' md='6'>
       <div className="hero-content">
<p >Trending Products in {year}</p>
<h2>Make Your Inter More Minimalistic & Modern</h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem praesentium nostrum molestiae quis sint debitis eum cupiditate, illo amet facilis!</p>
<motion.button whileTap={{scale:1.2}} className='buy-btn'><Link to='/shop'>Shop Now</Link></motion.button>
       </div>
   
       </Col>



       <Col lg='6' md='6'>
<div className="hero-img">
<img src={img} alt="" srcset="" />
</div>


       </Col>
       </Row>
     </Container>
   </section>


</>)
}

export default HomePage
