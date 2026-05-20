import React from 'react'

export default function Button({ 
    children,
    className='',
     type="button",
     onClick}) {
  return (
    <button 
    type={type} 
    onClick={onClick}
     className={`px-4 py-2 rounded font-[Inter] font-medium  rounded-xl w-[390px] text-white bg-[#030213] ${className}`}>
        {children}
    </button>
  )
}
