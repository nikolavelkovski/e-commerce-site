


import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='ml-auto'>
      <ul className='flex text-white text-lg'>
        <li><Link to="/">Login</Link></li>
        <li className='mx-5'><Link to="/">Signup</Link></li>
        <li className='ml-10 '><Link to="/">Shopping Cart</Link></li>
      </ul>
    </nav>
  )
}