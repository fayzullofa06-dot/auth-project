  import React, { useState ,useEffect} from 'react'
  import { useDispatch, useSelector } from 'react-redux'
 import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { RiArrowRightDownLongLine,} from "react-icons/ri";
import { RiArrowRightUpLongLine } from "react-icons/ri";
 import { getData, } from '../../features/service/TransactionSlice'
const categoryColors = {
  'Ovqat': 'bg-blue-500',
  'Transport': 'bg-green-500',
  "To'lovlar": 'bg-orange-500',
  "O'yin-kulgi": 'bg-purple-500',
}
  export default function Dashboard() {
    const [animate,setAnimate]=useState(false)
    const dispatch=useDispatch()
   

useEffect(() => {
  dispatch(getData())  
  setTimeout(() => {
    setAnimate(true)
  }, 100)
}, [])
    
  //for sending data to the redux
  const {items,loading,error}=useSelector(
    (state)=>state.transactions//so we wrote in our store,js like the transactions transactionReducer so this become transactions so it is our slice with data so like transactions is our object it has items and loading and error just we are destructing it but we could to other ways but it would be so much  like state.transactions.items or so on 
  )
  const categoryMap={}
  items.filter(items=>items.amount<0).forEach(item=>{
    if(categoryMap[item.category]){
      categoryMap[item.category]=categoryMap[item.category]+Math.abs(item.amount)
    }
    
    else{
      categoryMap[item.category]=Math.abs(item.amount)
    }
  })
 const categories=Object.entries(categoryMap).map(([name,amount])=>({name,amount}))
 const max=Math.max(...categories.map(c=>c.amount))
  const latestItems=[...items].sort((a,b)=>new Date(b.date)- new Date(a.date))
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
  <div className="grid grid-cols-1  sm:grid-cols-3  gap-10 mt-5 items-start">
  <div className='bg-[#fffff] rounded-2xl p-5 shadow-lg '>
    <h1 className='text-[#717182] font-medium text-[14px]
    font-[Inter]'>Balance</h1>
    <p className='font-[Inter] text-[#0A0A0A] text-2xl font-bold leading-8 '>{`${balance.toLocaleString('uz-UZ')}`}</p>
    <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>Total balance</p>
  </div>
  <div className='bg-[#ffffff] rounded-2xl p-5 shadow-lg'>
    <h1 className='text-[#717182] font-medium text-[14px]
    font-[Inter]'> Income</h1>
    <p className='font-[Inter] text-[#00A63E] text-2xl font-bold leading-8 '>{income.toLocaleString('uz-UZ')}</p>
    <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>This month</p>
  </div>
  <div className='bg-[#fffff] rounded-2xl p-5 shadow-lg'>
    <h1 className='text-[#717182] font-[Inter] font-normal text-[12px]'>Expenses</h1>
    <p className='font-[Inter] text-[#E7000B] text-2xl font-bold leading-8 '>{expenses.toLocaleString('uz-UZ')}</p>
  <p className='text-[#717182] font-[Inter] font-normal text-[12px]'>This month</p>
  </div>
   </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 '>
  <div className='rounded-[14px] shadow-sm p-5 sm:w-[550px] col-span-1 bg-[#FFFFFF]'>
 {/*  this part is the expense for Supermakert and others */}
    <div className='flex  items-center justify-between'>
   <h1 className='text-[#0A0A0A] font-[Inter] font-medium text-[18px] '>The Latest Transactions</h1>
   <div className='flex gap-2'>
    <Link  className='mt-1' to='/main/transactions'> 
    <FiEye/>
   </Link>
   <span className='text-[#0A0A0A] font-[Inter] font-medium text-[18px]'>See All</span>
   </div>   
    </div> 
   {latestItems.slice(0,5).map(items=>(
  /*   the wrapper of the latest transactions */
    <div key={items.id} className='flex gap-3 mt-5 '>
   {/*    the left side */} 
  
      {items.amount> 0?(
<RiArrowRightDownLongLine  size={44} className=' p-2.5 text-[green] rounded-[20px] bg-[#DCFCE7]'/>
      ):
      (<RiArrowRightUpLongLine  size={44}className='  p-2.5 text-[red] rounded-[20px] bg-[#FFE2E2]' />)}
     
      {/*  title and the category parts */}
      <div>
        <h3 className='text-[#0A0A0A] font-[Inter] font-medium text-[16px]'>{items.title}</h3>
        <p className='text-[#717182] font-[Inter]'>{items.category}</p>
      </div>
     {/*  the date and the expenses */}
      <div  className='text-right ml-auto'>
        <p  className= {` ${items.amount>0 ? 'text-[#00A63E]':'text-[#E7000B]'} font-semibold font-[Inter] text-[16px] `}>{items.amount.toLocaleString('uz-UZ')}</p>
        <p className='font-[Inter] text-[14px] text-[#717182]'>{items.date}</p>
      </div>
       
    </div>
    
    
   ))}
  </div>
    {/*  filling parts */}
  <div className='col-span-1 bg-white rounded-2xl py-6 px-4 shadow-sm'>
    <h1 className='font-[Inter] font-medium text-[18px] text-[#0A0A0A]'>According to Categories</h1>
   {/*  filling categories */}
      {categories.map(item=>(
    <div key={item.name} className='mt-7'>
      <div className='flex justify-between '>
        <p className='font-[Inter]'>{item.name}</p>
        <p className='font-[Inter]'>{item.amount.toLocaleString('uz-UZ')}</p>
      </div>
      <div className=' bg-gray-200 rounded-full h-2 mb-3'>
        <div className={`${categoryColors[item.name]||'bg-gray-400'} h-2 rounded-full transition-all duration-700`}
        style={{width: animate?`${(item.amount/max) *100}%`:'0'}}> </div>
      </div>
    </div>
    ))}

  </div>
  </div>
 


    
      </div>
    )
  }
