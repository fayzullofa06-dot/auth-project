import React from 'react'
import { FaWallet } from "react-icons/fa6";
import Inputs from '../../components/inputs/Inputs';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Icons from '../../components/icons/Icons';

export default function Login() {
 
  const navigate=useNavigate()

  
  return (
  <div className="w-[500px] h-[550px]  border-[1px]  bg-[#FFFFFF] flex flex-col  gap-[12px] items-center py-[40px]  shadow-lg rounded-[20px]">
      <Icons icon={FaWallet}/>
       <h1 className='font-[Inter] text-[30px]'>Xush kelibsiz</h1>
       <h2 className='font-[Inter] text-[#717182]'>Hisobingizga kiring</h2>
       <div className='mt-[30px] px-[40px] flex flex-col gap-[6px]'>
       <label className='font-medium'>Email</label>
         <Inputs type='email' placeholder='email@example.com' className='rounded-[20px]  bg-[#F3F3F5]'/>

     <label className='font-medium'>Parol</label>
         <Inputs type='password' placeholder='*******' className='rounded-[20px]  bg-[#F3F3F5] '/>
       </div>
        <Button className='mt-[20px]' onClick={()=>navigate('/main/dashboard')}>Kirish</Button>
        <div className='w-[400px] gap-[4px] flex px-[60px] mt-[20px]'>
   <p>Hisobingiz yo'qmi? </p>
<Link to="/sign" className="text-blue-500 hover:underline cursor-pointer">
  Royxatdan otish
</Link>
        </div>
  
    </div>
  )
}
