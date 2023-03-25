
import React from 'react'
import Link from 'next/link'

import {RxSketchLogo , RxDashboard ,  RxPerson } from 'react-icons/rx'
import { FiSettings } from 'react-icons/fi'
import { BsTable , BsGraphUp } from "react-icons/bs";

const Sidebar = ({children}) => {
  return (
    <div className='flex'>

        {/* navBar  */}

       <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] justify-between flex flex-col'>
          <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='bg-purple-800 text-white p-3 rounded-lg inline-block mb-1'>
                        <RxSketchLogo size={20}/>
                    </div>
                </Link>
                <span className='border-b-[2px] border-gray-200 w-full '></span>

                <Link href='/'>
                    <div className='bg-gray-600 cursor-pointer hover:bg-gray-500 text-white p-3 rounded-lg inline-block my-2'>
                        < RxDashboard size={20}/>
                    </div>
                </Link>  

                <span className='border-b-[2px] border-gray-200 w-full '></span>

                <Link href='/table'>
                    <div className='bg-gray-600 cursor-pointer hover:bg-gray-500 text-white p-3 rounded-lg inline-block my-2'>
                        <BsTable  size={20}/>
                    </div>
                </Link>

                <span className='border-b-[2px] border-gray-200 w-full '></span>

                <Link href='/graph'>
                    <div className='bg-gray-600 cursor-pointer hover:bg-gray-500 text-white p-3 rounded-lg inline-block my-2'>
                        < BsGraphUp size={20}/>
                    </div>
                </Link>
      
                <span className='border-b-[2px] border-gray-200 w-full '></span>

                <Link href='/pdf'>
                    <div className='bg-gray-600 cursor-pointer hover:bg-gray-500 text-white p-3 rounded-lg inline-block my-2'>
                        < FiSettings size={20}/>
                    </div>
                </Link>

            </div>
       </div>



        {/* body */}
        <main className='ml-20 w-full'  >
            {children}
        </main>

    </div>
    

  )
}

export default Sidebar
