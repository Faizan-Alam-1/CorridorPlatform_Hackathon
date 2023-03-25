import React from 'react'
import { GoGraph } from "react-icons/go";

const Header = () => {
  return (
    <div className='flex justify-between mx-9 pt-4'>
      
      
      <h2 className='flex font-bold'><GoGraph size={25}/>Dashboard</h2>
      <h2 className='font-bold'>Welcome Back</h2>
    </div>
  )
}

export default Header

