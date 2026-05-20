import React from 'react'
import { Outlet } from 'react-router-dom'


export default function LoginLayout() {
  return (
    <div className=' bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4]  min-h-dvh flex justify-center items-center'>
        
         <Outlet/>    
     
    </div>
    
    
   
  )
}
