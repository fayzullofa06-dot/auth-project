import React from 'react'
import Icons from '../icons/Icons'
import { TfiWallet } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { RiFolderChartLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
  return (
    <div className='p-5.75 ' >
        <div className='flex items-center gap-1 border-b border-gray-200 mb-2 min-h-[98px]'>
          <Icons icon={TfiWallet} className='p-3 rounded-3xl bg-white' />     
          <div className='p-3'>
             <h1 className='font-[Inter] font-semibold font-[weight-600px] text-2xl text-[#0A0A0A]'>Xarajatlar</h1>
             <h4 className='font-[Inter] font-normal text-sm text-[#717182]'>Boshqa tizim</h4>
            </div>     
        </div>
        <nav className=' flex flex-col '>
          <NavLink to='/main/dashboard' className={({isActive})=> 
            `bg-[#030213] rounded-[13px] flex items-center p-3 gap-3
            ${isActive ? '`bg-[#030213] text-white rounded-[13px]font-[Inter]':'bg-white text-[#717182]'}` }>
              <MdOutlineDashboard size={20}/>
              <span>Dashboard</span>
            </NavLink>
          <NavLink to='/main/transactions' className={({isActive})=> 
            `bg-[#030213] rounded-[13px] flex items-center p-3 gap-3
            ${isActive ? '`bg-[#030213] text-white rounded-[13px]font-[Inter]':'bg-white text-[#717182]'}` }>
              <GrTransaction size={20}/>
              <span>Transactions</span>
            </NavLink>
          <NavLink to='/main/categories' className={({isActive})=> 
            `bg-[#030213] rounded-[13px] flex items-center p-3 gap-3
            ${isActive ? '`bg-[#030213] text-white rounded-[13px]font-[Inter]':'bg-white text-[#717182]'}` }>
              <RiFolderChartLine size={20}/>
              <span>Categories</span>
            </NavLink>
          <NavLink to='/main/statistics' className={({isActive})=> 
            `bg-[#030213] rounded-[13px] flex items-center p-3 gap-3
            ${isActive ? '`bg-[#030213] text-white rounded-[13px]font-[Inter]':'bg-white text-[#717182]'}` }>
              <ImStatsDots  size={20}/>
              <span>Statistics</span>
            </NavLink>
          <NavLink to='/main/profile' className={({isActive})=> 
            `bg-[#030213] rounded-[13px] flex items-center p-3 gap-3
            ${isActive ? '`bg-[#030213] text-white rounded-[13px]font-[Inter]':'bg-white text-[#717182]'}` }>
              <CgProfile size={20}/>
              <span>Profile</span>
            </NavLink>
     
        </nav>
       
    
   
    </div>
  )
}
