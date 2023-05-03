import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductListBestCard from '../ProductListBestCard/ProductListBestCard'

const ProductListBest = ({data}) => {
  return (
    <Container>
<Row className='my-3'>
{
 data? data.map((product)=>( <ProductListBestCard product={product}/>
  )):''
}
</Row>
</Container>
  )
}

export default ProductListBest
