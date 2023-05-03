import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({data}) => {
  return (
<Container>
<Row className='my-5'>
{
 data? data.map((product)=>( <ProductCard product={product}/>
  )):''
}
</Row>
</Container>
  )
}

export default ProductList
