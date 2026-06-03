import React from 'react'
import { FaPlus } from "react-icons/fa";
export default function Transaction() {
  return (
    <div>
    <div className='flex justify-between'>
      <div>
 <h1 className='font-[Inter] text-3xl font-semibold text-[#0A0A0A] '>Transactions</h1>
      <p className='text-[#717182] font-normal text-[16px]  '>All the Expenses and incomes</p>
      </div>
  <button className='flex items-center gap-2 bg-[#030213] text-white rounded-[10px] h-10 px-4  active:bg-[#062120] hover:bg-[#062120]'>
  <FaPlus size={12} className='text-white'/>
  New Transaction
</button>
    </div>
  {/*   main part */}
    <div className=''>
      
    </div>
    </div>
  )
}
