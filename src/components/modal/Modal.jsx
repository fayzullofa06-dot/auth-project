import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { RiArrowRightDownLongLine,} from "react-icons/ri";
import { RiArrowRightUpLongLine } from "react-icons/ri";
import Inputs from '../inputs/Inputs';
import { useDispatch } from 'react-redux';
import { addData } from '../../features/service/TransactionSlice';
export default function Modal({onClose}) {
  const dispatch=useDispatch()
  const handleAdd=()=>{
    dispatch(addData(form)
  )
  onClose()
  }
  const [form,setForm]=useState({
    name:'',
  amount:'',
  category:'',
  date:''
  })
  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className=' fixed z-[100] bg-[#00000080]  inset-0 flex  justify-center  items-center  ' onClick={onClose}>
    {/*  modal-inside-wrapper */}
      <div className=' bg-[#FFFFFF] rounded-[14px] w-[400px] h-[600px] shadow-[0px 4px 6px -4px #0000001A] p-5 '  onClick={(e)=>e.stopPropagation()}>
<div className='flex justify-between'>
  <h1 className='text-[#0A0A0A] font-[Inter] font-semibold text-[18px] '>New Transactions</h1>
  <IoMdClose onClick={onClose} className='text-red-800'/>
</div> 
{/* wrapper of the inputs */}
<form className='flex flex-col gap-2 mt-[20px] border-t-[1px]' >

  <label className='mt-[10px]'>Name</label>
<input type="text" placeholder='Example: Supermarket' className='bg-[#F3F3F5;] rounded-[10px] border-[1px] p-2'  value={form.name} onChange={handleChange}/>

  <label className='mt-[10px]'> Summa (so'm) </label>
<input type="amount" placeholder='0' className='bg-[#F3F3F5;] rounded-[10px] border-[1px] p-2'  value={form.amount} onChange={handleChange}/>

  <label className='mt-[10px]'>Category</label>
<input type="text" placeholder='Example: Food' className='bg-[#F3F3F5;] rounded-[10px] border-[1px] p-2'  value={form.category} onChange={handleChange}/>

  <label className='mt-[10px]'>Date</label>
<input type="date" placeholder='Example: Supermarket' className='bg-[#F3F3F5;] rounded-[10px] border-[1px] p-2'  value={form.date} onChange={handleChange}/>

</form>
<div className='flex gap-2 mt-[10px] flex-col'>
  <h1>Type</h1>
<div className="flex gap-3">
  <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl
    hover:bg-red-50 hover:border-red-200 active:scale-95 transition duration-150">
    <RiArrowRightUpLongLine className="text-red-500 text-lg" />
    <span className="font-medium">Xarajat</span>
  </button>

  <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl
    hover:bg-green-50 hover:border-green-200 active:scale-95 transition duration-150">
    <RiArrowRightDownLongLine className="text-green-500 text-lg" />
    <span className="font-medium">Daromad</span>
  </button>
</div>
<div className="flex gap-3 mt-4">
  <button className="flex-1 h-10 border border-gray-200 rounded-xl text-sm font-medium
    hover:bg-gray-100 active:scale-95 transition duration-150">
    Cancel
  </button>

  <button className="flex-1 h-10 bg-[#02021A] text-white rounded-xl text-sm font-medium
    hover:bg-[#0a0a2a] active:scale-95 transition duration-150">
    Add
  </button>
</div>

</div>
      </div>
    </div>
  )
}
