import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import style from './Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear()
  return (

    <div className={style.footer}>
      <Container>
        <Row>


        <Col lg='4'>

<div className={style.logo}>
  <div>
    <h1 className='text-white'>Multimart</h1>
  </div>

</div>

<p className='text-footer mt-4'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus veniam maxime officiis dignissimos similique laborum eius. Illo dignissimos nisi dicta?
  </p>
        </Col>


        <Col lg='3'>
          <div className={style.footer_links}>
            <h4 className={style.quicl_links}>
              Top Cateogory
            </h4>
            <ul className='ps-0'>
              <li className='ps-0 border-0'>
                <Link to='/'>Mobile Phones</Link>
              </li>


              <li className='ps-0 border-0'>
                <Link to='/'>Modern Sofa</Link>
              </li>

              <li className='ps-0 border-0'>
                <Link to='/'>Smart Watches</Link>
              </li>

              <li className='ps-0 border-0'>
                <Link to='/'>Arm Chair </Link>
              </li>


            </ul>
          </div>
        </Col>


        <Col lg='2'>
        <div className={style.footer_links}>
            <h4 className={style.quicl_links}>
             Usefull Links 
            </h4>
            <ul className='ps-0' >
              <li className='ps-0 border-0'>
                <Link to='/'>Shop</Link>
              </li>


              <li className='ps-0 border-0'>
                <Link to='/'>Cart</Link>
              </li>

              <li className='ps-0 border-0'>
                <Link to='/'>Login</Link>
              </li>

              <li className='ps-0 border-0'>
                <Link to='/'>Privacy Ploicy  </Link>
              </li>


            </ul>
          </div>
        </Col>


        <Col lg='3'>
        <div className={style.footer_links}>
            <h4 className={style.quicl_links}>
Contact             </h4>
            <ul className='footer-contact ps-0'>
              <li className='ps-0 border-0 d-flex align-content-center gap-2'>
               <span className='text-white'><i class="ri-map-pin-line"></i></span>
               <p>Mrasfa , Banha</p>
              </li>


              <li className='ps-0 border-0 d-flex align-content-center gap-2'>
               <span className='text-white'><i class="ri-phone-line"></i></span>
               <p>+20 1167894425</p>
              </li>

              <li className='ps-0 border-0 d-flex align-content-center gap-2'>
              <span className='text-white'><i class="ri-mail-line"></i></span>
               <p>egyptmiser@gmail.com</p> 

              </li>


            </ul>
          </div>
        </Col>



<Col>
<p className="footer_copy text-white text-center my-3">Copyright {year} Development By Kareem Hany</p>
</Col>

        </Row>
      </Container>

    </div>
  )
}

export default Footer

 