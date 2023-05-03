import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [secounds, setSecounds] = useState()


    let interval;
    const getDate=()=>{
        const dis= new Date('Mar 27,2023').getTime()
        interval=setInterval(()=>{
            const now =new Date().getTime()
            const deffrent= dis -  now

            const days= Math.floor(deffrent / (1000 * 60 * 60 *24))
            const hours= Math.floor(deffrent % (1000*60*60*24) / (1000*60*60))
            const minutes= Math.floor(deffrent % (1000*60*60) / (1000*60))
            const secounds= Math.floor(deffrent % (1000*60) / 1000)

            if(dis >= 1){
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSecounds(secounds)
            }else{
                               clearInterval(interval.current)

            }

        })
    }

    useEffect(() => {
  
        getDate()
    },)
    
  return (
    <div className='Wrapper d-flex align-items-center gap-5 mt-5'>

        <div className="clock-data d-flex align-items-center gap-5">

            <div>
                <h1 className='text-white mb-2  fs-2'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>

            <span className='text-white fs-2'>:</span>
        </div>

        

        <div className="clock-data d-flex align-items-center gap-5">

<div>
    <h1 className='text-white mb-2 fs-2'>{hours}</h1>
    <h5 className='text-white fs-6'>Hours</h5>
</div>

<span className='text-white fs-2'>:</span>
</div>





<div className="clock-data d-flex align-items-center gap-5">

<div>
    <h1 className='text-white mb-2 fs-2'>{minutes}</h1>
    <h5 className='text-white fs-6'>Minutes</h5>
</div>

<span className='text-white fs-2'>:</span>
</div>




<div className="clock-data d-flex align-items-center gap-5">

<div>
    <h1 className='text-white mb-2 fs-2'>{secounds}</h1>
    <h5 className='text-white fs-6'>Seconds</h5>
</div>

</div>

      
    </div>
  )
}

export default Clock
