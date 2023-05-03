import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './ProductDesc.module.css'
import products from '../../assets/data/products'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductList from '../../Components/ProoductList/ProductList'
import { toast } from 'react-toastify'



const ProductDesc = () => {



    const [desc, setdesc] = useState('desc')
const[rating, setRating]=useState(null)
const reviewUser= useRef('')
const reviewMes= useRef('')

    const{id}=useParams()
    
    const product=products.find((item)=> item.id===id)


    const filterRelted= products.filter(item=> item.category===product.category)

    const submitHandler=(e)=>{
        e.preventDefault()

        const reviewUserName= reviewUser.current.value
        const reviewMesName= reviewMes.current.value


        const reviewObj= {
            UserName: reviewUserName,
            text: reviewMesName,
            rating
        }

        console.log(reviewObj)
        toast.success('Review Added Successfully')
    }




  return (
<section>
    <Container>
<Row>
<Col lg='12'>
    <div className='desc d-flex align-items-center gap-5'>
<h6 onClick={()=> setdesc('desc')} className={`${desc==='desc'? 'active-tab' : ''}`}>Description</h6>
<h6 onClick={()=> setdesc('rev')} className={`${desc==='rev'? 'active-tab' : ''}`}>Reviews ({product.reviews.length})</h6>
    </div>


{
    desc==='desc'?  <div className='my-5'>
    <p>{product.description}</p>


</div>: <div className='reviews'>
<div className="review mt-5">
    <ul>
        {
          product.reviews? product.reviews.map((item,index)=><li key={index} className='mb-4'> <h6>Jhon Doe</h6> <span>{item.rating}</span>
          <p> {item.text}</p>
           </li> ):''
        }
    </ul>



    <div className="review-form">
        <h4>Leave Your Experince</h4>
<form action="" onSubmit={submitHandler}>
    <div className="form-group">
<input type="text" ref={reviewUser} placeholder='Enter Your Name' />
    </div>




    <div className="form-group d-flex align-items-center gap-5">
    <span onClick={()=> setRating(1)}>1 <i class="ri-star-s-fill"></i></span> 
    <span onClick={()=> setRating(2)}>2 <i class="ri-star-s-fill"></i></span> 
    <span onClick={()=> setRating(3)}>3 <i class="ri-star-s-fill"></i></span> 
    <span onClick={()=> setRating(4)}>4 <i class="ri-star-s-fill"></i></span> 
    <span onClick={()=> setRating(5)}>5 <i class="ri-star-s-fill"></i></span> 
   </div>


   <div className="form-group">
<textarea rows={4} ref={reviewMes} type="text" placeholder='Review Message' />
    </div>

<button type='submit' className="buy-btn mb-5">Submit</button>
</form>
    </div>
</div>
</div>
}

    
</Col>





<Col lg='12'>
    <h4 className='text-center my-5 fs-2'>Related Products</h4>
</Col>


<ProductList data={filterRelted}/>
</Row>
    </Container>
</section>
  )
}

export default ProductDesc;
