import React, { useState,useEffect } from 'react'
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { RiArrowRightDownLongLine,} from "react-icons/ri";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getData,deleteData } from '../../features/service/TransactionSlice'

export default function Transaction() {
   const [filter,setFilter]=useState('all')
   const[value,setValue]=useState('')
const {items}=useSelector(state=>state.transactions)
const dispatch=useDispatch()

useEffect(() => {
  
dispatch(getData())
 
}, [])

const filtered=items.filter(items=>{
  const switching=filter==='all'||(filter==='income'&&items.amount>0)||
  (filter==='expense'&&items.amount<0)
  const matching=items.title.toLowerCase().includes(value.toLowerCase())
  return  switching && matching
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
          <input type="search" placeholder='Search' className='  p-1 rounded-[10px] bg-[#F3F3F5]  min-w-50 md:min-w-140 lg:min-w-96 2xl:min-w-200  pl-9  '  value={value} onChange={(e)=>setValue(e.target.value)}/>
           </div>
           <div className='flex gap-3 '>
      <button onClick={()=>setFilter('all')} className='bg-[#030213]  rounded-[10px] p-1 min-w-20 text-white' >All</button>
      <button className='bg-[#FFFFFF]  rounded-[10px] p-1 min-w-20 border-t-[0.63px] border-[#0000001A] text-black' onClick={()=>setFilter('income')} >Income</button>
      <button className='rounded-[10px] p-1 min-w-20 bg-white text-black border-t-[0.63px] border-[#0000001A]'onClick={()=>setFilter('expense')}>Expenses</button>
      </div>
      </div>
      </div>
    {filtered.map(items=>(
      <div key={items.id} className='flex justify-between py-4 px-7'>
       {items.amount>0?(
        <RiArrowRightDownLongLine size={44} className='p-2.5 text-[green] rounded-[20px] bg-[#DCFCE7]'/>
       ):(<RiArrowRightUpLongLine  size={44}className='  p-2.5 text-[red] rounded-[20px] bg-[#FFE2E2]' />)}
       
             <div className='ml-4'>
        <h3 className='text-[#0A0A0A] font-[Inter] font-medium text-[16px]'>{items.title}</h3>
        <div className='flex gap-4'>
        <p className='text-[#717182] font-[Inter]'>{items.category}</p>
        <p className='font-[Inter] text-[14px] text-[#717182]'>{items.date}</p>
        </div>
      </div>
     {/*  the date and the expenses */}
      <div  className='text-right ml-auto'>
      <div className='flex gap-5'>
        <p  className= {` ${items.amount>0 ? 'text-[#00A63E]':'text-[#E7000B]'} font-semibold font-[Inter] text-[16px] `}>{`${items.amount.toLocaleString('uz-UZ')} so'm`} 
         </p>
        <button ><MdOutlineEdit/></button> 
         <button onClick={()=>{
          if(window.confirm("Are u sure to delete"))
            dispatch(deleteData(items.id))
         }}><RiDeleteBin5Line/></button>
          </div>
  

          
       
        
      </div>
       
    </div>

    
      
    ))}
    </div>
    </div>
  )
}
