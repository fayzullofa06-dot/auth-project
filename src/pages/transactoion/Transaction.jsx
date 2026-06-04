import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { RiArrowRightDownLongLine,} from "react-icons/ri";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import { FiEdit,FiTrash } from 'react-icons/fi';
export default function Transaction() {
  const [filter,setFilter]=useState('all')
  const{items}=useSelector(state=>state.transactions)
  

 const filteredItems = items.filter(item => {
  if(filter === 'income') return item.amount > 0
  if(filter === 'expense') return item.amount < 0
  return true
})
  return (
    <div>
    <div className='flex justify-between'>
      <div>
 <h1 className='font-[Inter] text-3xl font-semibold text-[#0A0A0A] '>Transactions</h1>
      <p className='text-[#717182] font-normal text-[16px]  '>All the Expenses and incomes</p>
      </div>
  <button className='flex items-center gap-2 bg-[#030213] text-white rounded-[10px] h-10 py-3 sm:p-5  active:bg-[#062120] hover:bg-[#062120]'>
  <FaPlus  size={11}  className='text-white'/>
  New Transaction
</button>
    </div>
  {/*   main part */}
    <div className='min-h-dvh bg-white shadow-md mt-4 rounded-[14px] sm:mt-8'>
     {/*  for controlling inside  */}
    <div className='p-7'>
      {/* for controlling top of filter and buttons */}
      <div className='flex flex-col gap-5 md:flex-row '>

      
     {/*  for the filter */}
        <div className=' flex relative'>
          <CiSearch size={18} className='absolute left-3 top-2 '/>
          <input type="search" placeholder='Search' className='  p-1 rounded-[10px] bg-[#F3F3F5]  min-w-50 md:min-w-150 lg:min-w-200  pl-9  '  />
           </div>
           <div className='flex gap-3 '>
      <button className='bg-[#030213]  rounded-[10px] p-1 min-w-20 text-white' onClick={()=>setFilter('all')}>All</button>
      <button className='bg-[#FFFFFF]  rounded-[10px] p-1 min-w-20 border-t-[0.63px] border-[#0000001A] text-black'  onClick={()=>setFilter('income')}>Income</button>
      <button className='rounded-[10px] p-1 min-w-20 bg-white text-black border-t-[0.63px] border-[#0000001A]'  onClick={()=>setFilter('expense')}>Expenses</button>
      </div>
      </div>{filteredItems.map(item => (
  <div key={item.id} className='flex items-center gap-3 px-7 py-4 border-b border-gray-100'>
    
    {/* icon */}
    {item.amount > 0 ? (
      <RiArrowRightDownLongLine size={44} className='p-2.5 text-[green] rounded-[20px] bg-[#DCFCE7]' />
    ) : (
      <RiArrowRightUpLongLine size={44} className='p-2.5 text-[red] rounded-[20px] bg-[#FFE2E2]' />
    )}

    {/* title and category + date */}
    <div>
      <h3 className='font-[Inter] font-medium text-[16px] text-[#0A0A0A]'>{item.title}</h3>
      <p className='text-[#717182] text-[14px]'>{item.category} •  {item.date}</p>
    </div>

    {/* amount + edit/delete */}
    <div className='ml-auto flex items-center gap-4'>
      <p className={`font-semibold text-[16px] ${item.amount > 0 ? 'text-[#00A63E]' : 'text-[#E7000B]'}`}>
        {item.amount > 0 ? '+' : ''}{new Intl.NumberFormat('en-US').format(item.amount)} so'm
      </p>
      <FiEdit size={16} className='text-gray-400 cursor-pointer' />
      <FiTrash size={16} className='text-red-400 cursor-pointer' />
    </div>

  </div>
))}
      </div>
    </div>
    </div>
  )
}
