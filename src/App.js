import React from 'react'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Checkout from './Pages/CheckOut'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Shop from './Pages/Shop'
import ProductDetails from './Pages/ProductDetails.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './Components/Layout/Layout'


const App = () => {

  const router =createBrowserRouter([
{path:'/', element:<Layout/>,children:[
  {path:'/',element:<Home/>},
  {path:'/cart',element:<Cart/>},
  {path:'/checkout',element:<Checkout/>},
  {path:'/login',element:<Login/>},
  {path:'/register',element:<Register/>},
  {path:'/shop',element:<Shop/>},
  {path:'/shop/:id',element:<ProductDetails/>},
]}
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

