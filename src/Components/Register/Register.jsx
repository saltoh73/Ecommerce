import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let navigate=useNavigate()
    const [user, setuser] = useState({
        "firstName":"",
        "lastName":"",
        "email":"",
        "password":""
    })

const [error, seterror] = useState('')


    function getUser(e){
        let myUser={...user}
        myUser[e.target.name]=e.target.value
        setuser(myUser)
    }



    const sendDataRegister=async()=>{
        let data =await axios.post('http://localhost:3000/user/signUp',user)
    if(data.message=='success'){
navigate('/login')
    }else{
seterror(data.message)
    }
    }



    const sendDate=(e)=>{
e.preventDefault();
sendDataRegister()
    }

  return (
  <>
  

  {/* {
    error.length>0? <h2>{error}</h2>:''
  } */}

  <h1 className='mt-5 ms-5 fs-3' >Sign Up</h1>
  
  <form action="" onSubmit={sendDate}>


 <div className="form-group ms-5 my-3">
    <label htmlFor="firstName"></label>
    <input onChange={getUser} type="text" className='form-control w-50' name='firstName' placeholder='Enter Your FirstName'  id='firstName' />
 </div>


 <div className="form-group ms-5">
    <label htmlFor="lastName"></label>
    <input type="text" onChange={getUser}  className='form-control w-50' name='lastName' placeholder='Enter Your lastName'  id='lastName' />
 </div>




 <div className="form-group ms-5">
    <label htmlFor="email"></label>
    <input type="text" onChange={getUser}  className='form-control w-50' name='email' placeholder='Enter Your Email'  id='email' />
 </div>


 <div className="form-group ms-5">
    <label htmlFor="password"></label>
    <input type="password" onChange={getUser}  className='form-control w-50' name='password' placeholder='Enter Your Password'  id='password' />
 </div>


 <button  className='btn btn-info ms-5 mb-4'>Sign Up</button>






  </form>
  
  
  
  
  </>
  )
}

export default Register
