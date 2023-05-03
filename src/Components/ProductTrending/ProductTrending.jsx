import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './ProductTrending.module.css'

const ProductTrending = () => {
  return (
<section className={style.trend}>
<Container>
    <Row>
        <Col lg='12' className='text-center mt-5'>
       <h2 className={style.section}>
Trending Products
       </h2>
       <div className={style.underLine}></div>
       <div className={style.underLine1}></div>
        </Col>
    </Row>
</Container>
</section>
  )
}

export default ProductTrending
