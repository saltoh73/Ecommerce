import React, { useEffect, useRef } from 'react'
import {Container,Nav,Navbar,Row} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png"
import usericon from '../../assets/images/user-icon.png'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux'


const Header = () => {



  const totalQuntity= useSelector(state=> state.cart.totalQuantity)
  const headerRef= useRef(null)

const stickyHeader=()=>{
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
  })
}


 let navigate=useNavigate()


const navigateToCart=()=>{
  navigate('/cart')
}


  useEffect(() => {

stickyHeader()

return ()=> window.removeEventListener('scroll', stickyHeader)
  }, [])
  
  return (



<header ref={headerRef}>
<Navbar  expand="lg">
<Container>
  <Navbar.Brand href="/home">
    <div className="logo ">
    <img src={logo} alt="" srcset="" />
    <div className="logo-content">
    <h6 className='fw-bold text-black'>Ecommerce</h6>
    </div>
    
    </div>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <ul className="navbar-nav m-auto pb-2 mb-2 mt--5 mb-lg-0">
     
     <li className="nav-item">
         <Link className="nav-link fw-bold text-black " to="/">Home</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link fw-bold text-black" to="/shop">Shop</Link>
       </li>

       <li className="nav-item">
         <Link className="nav-link fw-bold text-black" to="/cart">Cart</Link>
       </li>
  
   
     </ul>
  </Navbar.Collapse>

  <div className="nav-icons ">
    <motion.span whileTap={{scale:1.2}} className='fav-icon'>
      <i class="ri-heart-line fs-4"></i> 
      <span className='badge rounded-5'>1</span>
      </motion.span>


    <motion.span onClick={navigateToCart} whileTap={{scale:1.2}} className='cart-icon mx-5 '> <i class=" ri-shopping-bag-line fs-4"></i> 
    <span className='badge rounded-5'>{totalQuntity}</span>
    </motion.span>
    <span>
      <motion.img whileTap={{scale:1.2}} src={usericon}/>
    </span>



   
  </div>
</Container>
</Navbar>

</header>

  )
}

export default Header
