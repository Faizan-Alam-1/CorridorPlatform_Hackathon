
import React from 'react'
import {data} from '../data/data.jsx'
import {FaShoppingBag} from 'react-icons/fa'

const Recentorder = () => {
  return (
    <div className='bg-white w-full lg:h-[70vh] h-[50vh] p-4 lg:ml-5 mt-4 mb-3 border rounded-lg overflow-y-scroll'>
      <h1 className='font-bold'>monthly salary</h1>
      <ui>
      {data.map((order , id)=>(
        <li  key={id} className="bg-gray-50  hover:bg-gray-100 rounded-lg my-3 p-3 flex items-center cursor-pointer">
            <div className='bg-purple-100 rounded-lg p-3'>
                <FaShoppingBag className='text-purple-800' />
            </div>

            <div className='ml-3'>
                <p>${order.monthly_salary}</p>
                {/* <p className='text-sm text-gray-700'>{order.name.first}</p> */}
            </div>
            {/* <p className='mx-[4.5rem] text-sm text-gray-500'>{order.date}</p> */}
          
        </li>

      ))}
      </ui>
      
    </div>
  )
}

export default Recentorder
