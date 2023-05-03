import React from 'react'
import CommonSection from '../CommonSection/CommonSection'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'


const Checkout = () => {

    const totalQue=useSelector(state=> state.cart.totalQuantity)
    const totalAmount =useSelector(state=> state.cart.totalAmount)
  return (
<>

<CommonSection title='CheckOut' />


<section>
    <Container>
        <Row>
           <Col lg='8' className='my-5' >
           <h6 className='mb-4 fw-bold'>Billing Information</h6>
           <Form className='billing'>
<FormGroup className="form-group">
<input type="text" placeholder='Enter Your Name' />
</FormGroup>


<FormGroup className="form-group">
<input type="text" placeholder='Enter Your Name' />
</FormGroup>



<FormGroup className="form-group">
<input type="email" placeholder='Enter Your Email' />
</FormGroup>



<FormGroup className="form-group">
<input type="number" placeholder='Enter Your PhoneNumber' />
</FormGroup>



<FormGroup className="form-group">
<input type="text" placeholder='Enter Your Street Address' />
</FormGroup>


<FormGroup className="form-group">
<input type="text" placeholder='Enter Your City' />
</FormGroup>


<FormGroup className="form-group">
<input type="text" placeholder='Enter Your Postal Code' />
</FormGroup>


<FormGroup className="form-group">
<input type="text" placeholder='Enter Your Country' />
</FormGroup>


           </Form>
           </Col> 


           <Col lg='4' className='my-5 '>
           
           <div className="checkout-cart">
           <h6>Total Qty: <span>{totalQue}</span></h6>
           <h6>Subtotal: <span>${totalAmount}</span></h6>
           <h6>Shipping: <span>$0</span></h6>
           <h6>Free Shipping</h6>
           <div className="line mt-5 mb-5"></div>
           <h4 >Total Cost: <span>${totalAmount}</span></h4>

           </div>


           <button className="w-100 mt-5 buy-btn auth-btn">
Place An Order
           </button>
           </Col>
        </Row>
    </Container>

    
</section>




</>
  )
}

export default Checkout
