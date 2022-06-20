
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Card({children}: Props) {
  
    return <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>{children}</div>
 
}