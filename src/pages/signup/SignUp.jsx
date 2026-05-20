import React from 'react'
import { FaWallet } from "react-icons/fa6";
import Inputs from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
export default function SignUp() {
  return (
    <div className="w-[500px] h-[634px]  border-[1px]  bg-[#FFFFFF] flex flex-col  gap-[12px] items-center py-[40px]  shadow-lg rounded-[20px]">
         <div className=' p-[20px]  bg-gradient-to-r from-[#2B7FFF] to-[#00C950]  rounded-[19px]'>
        <FaWallet/>
         </div>
         <h1 className='font-[Inter] text-[30px]'>Hisob yaratish</h1>
         <h2 className='font-[Inter] text-[#717182]'>Malumotlaringizni kiriting</h2>
         <div className='flex mt-[20px] flex-col gap-[5px] px-[40px]'>
         <label className='font-medium'>Ism</label> 
           <Inputs type='text' id='Ism' placeholder='ismingiz' className='rounded-[20px]  bg-[#F3F3F5]'/>
  
  
         <label className='font-medium' >Email</label> 
           <Inputs type='email'  id='email'placeholder='email@example.com' className='rounded-[20px]  bg-[#F3F3F5] '/>
  
         <label className='font-medium' >Parol</label> 
           <Inputs type='password' id='Password' placeholder='*******' className='rounded-[20px]  bg-[#F3F3F5] '/>

       <label className='font-medium' >Parolni tasdiqlash</label> 
           <Inputs type='password'  id='PasswordConfirming' placeholder='*******' className='rounded-[20px]  bg-[#F3F3F5] '/>
         </div>
          <Button>Kirish</Button>
          <div className='w-[200px] flex gap-[10px] '>
     <p>Hisobingiz Bormi? </p>
     <Link to='/login' className=' text-blue-700 hover:underline'>Kirish</Link>
  
          </div>
    
      </div>
  )
}
