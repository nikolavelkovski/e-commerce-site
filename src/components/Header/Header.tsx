
import React from 'react'
import Navbar from '../Navbar/Navbar';
import logo from './../../assets/images/logo.png';



export default function Header() {
  return (
    <header className='flex py-3 px-24 bg-slate-900 items-center'>
      <div className='flex items-center'>
        <figure className='w-24 h-18' >
            <img src={logo} alt="site-logo" className='object-contain' /> 
        </figure>
          <p className='text-white italic font-bold text-lg'>Amozon on steroids</p>
        </div>
        <Navbar />
    </header>
  )
}