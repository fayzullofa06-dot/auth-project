  import React from 'react'
  import { useDispatch, useSelector } from 'react-redux'

  export default function Dashboard() {
  const dispatch=useDispatch()//for sending data to the redux
  const {items,loading,error}=useSelector(
    (state)=>state.transactions//so we wrote in our store,js like the transactions transactionReducer so this become transactions so it is our slice with data so like transactions is our object it has items and loading and error just we are destructing it but we could to other ways but it would be so much  like state.transactions.items or so on 
  )
  const balance=items.reduce((acc,curr)=>acc+curr.amount,0)
 const income=items.filter(items=>items.amount>0)
 .reduce((acc,curr)=>acc+curr.amount,0)
 const expenses=items.filter(items=>items.amount<0)
 .reduce((acc,curr)=>acc+curr.amount,0)
    return (
      <div className='px-6'>
        <h1 className='text-[#0A0A0A] font-semibold  text-3xl font-[Inter]'> Dashboard </h1>
      <h3 className='text-[#717182] font-[Inter] font-normal text-[16px] '>control expenses </h3>

      { loading && <h1>loading</h1>}

      {error && <p className='text-red-600'>Error</p>}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-5">
  <div className='bg-[#fffff] rounded-2xl p-5 shadow-lg '>
    <h1 className='text-[#717182] font-medium text-[14px]
    font-[Inter]'>Balance</h1>
    <p className='font-[Inter] text-[#0A0A0A] text-2xl font-bold leading-8 '>{`${balance}`}</p>
    <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>Total balance</p>
  </div>
  <div className='bg-[#fffff] rounded-2xl p-5 shadow-lg'>
    <h1 className='text-[#717182] font-medium text-[14px]
    font-[Inter]'> Income</h1>
    <p className='font-[Inter] text-[#00A63E] text-2xl font-bold leading-8 '>{income}</p>
    <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>This month</p>
  </div>
  <div className='bg-[#fffff] rounded-2xl p-5 shadow-lg'>
    <h1 className='text-[#717182] font-[Inter] font-normal text-[12px]'>Expenses</h1>
    <p className='font-[Inter] text-[#E7000B] text-2xl font-bold leading-8 '>{expenses}</p>
  <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>This month</p>
  </div>
  </div>


    
      </div>
    )
  }
