//rafc
import React from 'react'
import { GoGraph } from "react-icons/go"; 
import {data} from '../data/data.jsx'
import { BsPersonFill , BsThreeDostsVertical } from 'react-icons/bs'

const table= () => {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='flex justify-between'>
        <h2 className='flex font-bold ml-3'><GoGraph size={25}/>Salary and Card interest rate </h2>
        <h2 className='font-bold mr-3'>Welcome Back</h2>
      </div>
      
       <div className='mt-5 m-2 w-[99%] h-[50%] bg-white'>
        <div className='flex justify-evenly  mr-3 ml-3 font-bold'>
            <span>Salary</span>
            <span>card interest rate</span> 
        </div>
         <ul>
           {data.map((order, id)=>(
            <li key={id} className="bg-gray-50  hover:bg-gray-100 rounded-lg my-3 p-3 flex justify-evenly cursor-pointer">
              <div className='flex'>

                <div className='bg-purple-100 p-3 rounded-lg'>
                   <BsPersonFill className='text-purple-800'/>
                </div>

                <div className='m-3 font-bold'>
                  <p>{order.monthly_salary}</p>
                </div>
              
              </div>

              <p className='pl-[3rem] pt-3 text-end'>{order.card_interest_rate}</p>

            </li>
           ))}
         </ul>


      </div> 
    </div>
   


  
  )
}

export default table
