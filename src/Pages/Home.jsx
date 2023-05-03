import React, { useState,useEffect } from 'react'
import ProductTrending from '../Components/ProductTrending/ProductTrending'
import ProductList from '../Components/ProoductList/ProductList'
import Services from '../Components/Services/Services'
import HomePage from './HomePage'
import product from '../assets/data/products'
import ProductBest from '../Components/ProductBest/ProductBest'
// import ProductListBest from '../Components/ProductBestSales/ProductListBest'
import Timer from '../Components/Timer/Timer'
import ProductArrivals from '../Components/ProductArrivals/ProductArrivals'
import PrdouctPopular from '../Components/PrdouctPopular/PrdouctPopular'

const Home = () => {
  const [trending, settrending] = useState([])
  const [Best, setBest] = useState([])
  const [mobile, setMobile] = useState([])
  const [wirless, setWireless] = useState([])
  const [watch, setWatch] = useState([])
  

  const getData=()=>{
  const filterChair=product.filter((item)=> item.category==='chair')
  settrending(filterChair)
  }

  const getBest=()=>{
    const filterSofa=product.filter((item)=> item.category==='sofa')
    setBest(filterSofa)
    }


    const getMobile=()=>{
      const filterMobile=product.filter((item)=> item.category==='mobile')
      setMobile(filterMobile)
      }


      const getWireless=()=>{
        const filterWiless=product.filter((item)=> item.category==='wireless')
        setWireless(filterWiless)
        }

        
      const getWatch=()=>{
        const filterWatch=product.filter((item)=> item.category==='watch')
        setWatch(filterWatch)
        }

  useEffect(() => {
getData()
getBest()
getWireless()
  getMobile()
  getWatch()

  },[])
  
  return (
    <>
    
    <HomePage/>
    <Services/>
<ProductTrending/>
<ProductList data={trending}/>
<ProductBest/>
<ProductList data={Best}/>
<Timer/>
<ProductArrivals/>
<ProductList data={mobile}/>
<PrdouctPopular/>
<ProductList data={watch}/>
    </>
  )
}

export default Home
