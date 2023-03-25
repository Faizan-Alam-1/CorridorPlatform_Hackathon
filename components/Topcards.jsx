
import React from 'react'

const Topcards = () => {
  return (
    <div className='flex m-4 lg:flex-row flex-col' >
      <div className='bg-white h-16 w-full flex justify-between border p-4 rounded-lg m-2' >
       <div className='flex justify-center flex-col'>
        <p className='font-bold text-[1.5rem]'>$50878769</p> 
        <p className='text-sm text-gray-800 font-semibold'>Total monthly salary</p>
       </div>
      </div>

      <div className='bg-white h-16 w-full flex justify-between border p-4 rounded-lg m-2'>
     
      <div className='flex justify-center flex-col'>
        <p className='font-bold text-[1.5rem]'>7.18 %</p> 
        <p className='text-sm text-gray-800 font-semibold'>Avg card interest rate</p>
       </div>
      </div>
      
      <div className='bg-white h-16 w-full flex justify-between border p-4 rounded-lg m-2'>
      
      <div className='flex justify-center flex-col'>
        <p className='font-bold text-[1.5rem]'>8.46 %</p> 
        <p className='text-sm text-gray-800 font-semibold'>Avg utilization</p>
       </div>

      </div>

    </div>
  )
}

export default Topcards
