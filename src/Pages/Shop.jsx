import React from 'react'
import CommonSection from '../Components/CommonSection/CommonSection'
import FilterOrSearch from '../Components/FilterOrSearch/FilterOrSearch'
import products from '../assets/data/products'
import { useState } from 'react'
import ProductList from '../Components/ProoductList/ProductList'


const Shop = () => {
//   const [Data, setData] = useState(products)

//   const handleFilter=(e)=>{
// const filterValue =e.target.value;
// if(filterValue==='sofa'){
//   const filterProducts= products.filter((item)=> item.category==='sofa')
//   setData(filterProducts)
// }




// if(filterValue==='watch'){
//   const filterProducts= products.filter((item)=> item.category==='watch')
//   setData(filterProducts)
// }



// if(filterValue==='sofa'){
//   const filterProducts= products.filter((item)=> item.category==='chair')
//   setData(filterProducts)
// }



// if(filterValue==='sofa'){
//   const filterProducts= products.filter((item)=> item.category==='mobile')
//   setData(filterProducts)
// }


// if(filterValue==='sofa'){
//   const filterProducts= products.filter((item)=> item.category==='wireless ')
//   setData(filterProducts)
// }


//   }

  return (
   <>
   
   <CommonSection title='Products'/>
   
      <FilterOrSearch />
 
      
   
   </>
  )
}

export default Shop
