import React from 'react'
import style from './CartItem.module.css'
import CommonSection from '../CommonSection/CommonSection'
import { Col, Container, Row } from 'react-bootstrap'
import CartAction from '../../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItem = () => {

    const cartItem= useSelector((state)=>state.cart.cartItems)
    const total= useSelector(state=>state.cart.totalAmount)


  return (
<>
<CommonSection title='Shopping Cart '/>

<section>
    <Container>
        <Row>
            <Col lg='9'>

                {
                    cartItem.length >=1?   <table className='table bordered my-5'>
                    <thead>
                     <tr>
                     <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                     </tr>
                    </thead>


                    <tbody>
                       {
                        cartItem.map((item,index)=>
                           <Tr item={item} key={index}/>
                        )
                       }
                    </tbody>
                </table>  :<h2 className='text-center fs-2 my-5 my-5'>No Product Added</h2>
                }
       
            </Col>



            <Col lg='3' className='my-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h6  className='fs-4'>Subtotal</h6>
                    <span className='fs-4 fw-bold'>${total}</span>
                </div>
                <p className='my-3 fs-6'>taxes and shipping will calculate in checkout</p>
                <button className="buy-btn mx-2">
                    <Link to='/shop'>Continue Shopping</Link>
                </button>


                <button className="buy-btn">
                    <Link to='/checkout'>Checkout</Link>
                </button>
            </Col>

        </Row>
    </Container>
</section>

</>
  )
}











const Tr= ({item})=>{
    const dispatch=useDispatch()

    const deleteProduct=()=>{
            dispatch(CartAction.delete(item.id))
        }

    return(
        <tr>
                            <td><img className='w-75' src={item.imgUrl} alt="" srcset="" /></td>
                            <td>{item.productName}</td>
                            <td>{item.price} $</td>
                            <td>{item.quantity}</td>
                            <td><i  onClick={deleteProduct}  class="ri-delete-bin-line"></i></td>
                        </tr>
    )
}

export default CartItem
