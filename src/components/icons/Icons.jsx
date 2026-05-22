import React from 'react'
import { FaWallet } from 'react-icons/fa6'
export default function Icons({icon:Icon,className=''}) {
  return (
    <div>
         <div className={` p-[20px]  bg-gradient-to-r from-[#2B7FFF] to-[#00C950]  rounded-[19px] ${className}`}>
            <Icon/>
             </div>
    </div>
  )
}
