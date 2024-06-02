import React from 'react'
import logo from '../assets/images/logo_fo_sharda-removebg-preview.png'

const Footer = () => {
  return (
    <div>
      <div className="footer bg-gray-950 w-full h-[50px] flex justify-center items-center text-white gap-5">
        <img src={logo} className='w-10' alt="" />
        All rights reserved. © Sharda travel @ 2024
      </div>
    </div>
  )
}

export default Footer
