import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommonSection from '../../Components/CommonSection/CommonSection'
import products from '../../assets/data/products'
import style from './ProductDetails.module.css'
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { CartAction } from '../../Redux/CartSlice'
import {  toast } from 'react-toastify';

const ProductDetails = () => {

    const {id}=useParams()
const product=products.find((item)=> item.id===id)

const dispatch =useDispatch()

const AddToCart =()=>{
dispatch(CartAction.addItem({
image: product.imgUrl,
productName:product.productName,
price: product.price,
id: product.id
}))

toast.success('Product Added Successfully ')}
  return (
 

<>

<CommonSection/>
    <section>
        <Container >
            <Row className='my-5'>
<Col lg='6' >
    <img  className='w-75' src={product.imgUrl} alt="" srcset="" />
</Col>


<Col lg='6'>
    <div className={style.product_details}>
        <h1>{product.productName}</h1>
        <div className='d-flex align-items-center mb-4 gap-5 product-rating'>
<div>
    <span><i class="ri-star-s-fill"></i></span>
    <span><i class="ri-star-s-fill"></i></span>
    <span><i class="ri-star-s-fill"></i></span>
    <span><i class="ri-star-s-fill"></i></span>
    <span><i class="ri-star-s-fill"></i></span>
</div>
<p>(<span>{product.avgRating} ratings</span>)</p>
        </div>

<span className={style.price}>{product.price} $</span>
<p className='mt-3'>{product.shortDesc}</p>
<motion.button onClick={AddToCart}  whileTap={{scale:1.2}} className='buy-btn'> Add To Cart</motion.button>



    </div>
</Col>


            </Row>
        </Container>
    </section>

    



</>


    )
}

export default ProductDetails
