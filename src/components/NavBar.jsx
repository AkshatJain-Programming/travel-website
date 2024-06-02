import React, { useRef } from 'react'
import logo from '../assets/images/logo_fo_sharda-removebg-preview.png'

const NavBar = () => {
 
  return (
    <div className='w-full h-16 bg-gray-800'>
      <div className="container w-[70%] h-full min-w-[400px] flex justify-between mx-auto items-center p-2">
        <img className='w-[5rem]' src={logo} alt="" />
        <ul className='flex gap-5 list-none text-white '>
            <li  className='hover:text-blue-400 transition-all duration-500'><a  href='/'>Home</a></li>
            <li  className='hover:text-blue-400 transition-all duration-500'><a href='/about'>About Us</a></li>
            <li  className='hover:text-blue-400 transition-all duration-500'><a  href='/contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
