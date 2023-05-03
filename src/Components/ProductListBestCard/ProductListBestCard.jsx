import React from 'react'
import { Col } from 'react-bootstrap'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import style from './ProductListBestCard.module.css'


const ProductListBestCard = ({product}) => {
  return (
 
    <Col lg='3' md='4' className='my-4'>
    <div className={style.product}>
<div className={style.product_img}>
<motion.img whileHover={{scale:1.2}} src={product.imgUrl} className='w-100' alt="" srcset="" />
</div>

<div className='p-2 product-info'>
<motion.h3 whileHover={{scale:1.1}} className={style.product_name}><Link to={`/shop/${product.id}`}>{product.productName}</Link></motion.h3>
<span className='text-center fs-5'>{product.category}</span>
</div>

<div className='product_card_bottom d-flex justify-content-between align-items-center p-2' >
<motion.span whileHover={{scale:1.2}} className={style.price}>{product.price}$</motion.span>
<motion.span whileTap={{scale:1.2}} ><i class="ri-add-line"></i></motion.span>
</div>
</div>
    </Col>
  )
}

export default ProductListBestCard
