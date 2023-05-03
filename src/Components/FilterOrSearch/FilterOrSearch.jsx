import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './FilterOrSearch.module.css'
import products from '../../assets/data/products'
import { useState } from 'react'
import ProductList from '../ProoductList/ProductList'

const FilterOrSearch = () => {
    const [Data, setData] = useState(products)

  const handleFilter=(e)=>{
const filterValue =e.target.value;
if(filterValue==='sofa'){
  const filterProducts= products.filter((item)=> item.category==='sofa')
  setData(filterProducts)
}




if(filterValue==='watch'){
  const filterProducts= products.filter((item)=> item.category==='watch')
  setData(filterProducts)
}



if(filterValue==='chair'){
  const filterProducts= products.filter((item)=> item.category==='chair')
  setData(filterProducts)
}



if(filterValue==='mobile'){
  const filterProducts= products.filter((item)=> item.category==='mobile')
  setData(filterProducts)
}


if(filterValue==='wireless'){
  const filterProducts= products.filter((item)=> item.category==='wireless ')
  setData(filterProducts)
}

if(filterValue==='data'){

    setData(products)
  }



  }


  const handleSerch=(e)=>{
  const  searchValue=e.target.value
    const search= products.filter((item)=> item.productName.toLowerCase().includes(searchValue.toLowerCase()))
    setData(search)
  }

  return (
<section className='mt-5 my-5'>
<Container>
    <Row>

<Col md='3' lg='3'>
    <div className={style.filter}>
        <select onChange={handleFilter}>
            <option value='data'>Filter By Cateogory</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
        </select>

    </div>
</Col>




<Col md='3' lg='3'><div className={style.filter}>
        <select>
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="mobile">Mobile</option>
        </select>

    </div>
    </Col>




<Col md='6' lg='6'>
    <div className={style.search}>
        <input onChange={handleSerch} type="text"  placeholder='Search..............'/>
        <span><i class="ri-search-line"></i></span>
    </div>
</Col>





{
    Data.length>=1? <ProductList data={Data}/>:  <h1 className='text-center mt-5 pt-5'>No Product </h1>
}
    </Row>
   </Container>
</section>





  )
}

export default FilterOrSearch
