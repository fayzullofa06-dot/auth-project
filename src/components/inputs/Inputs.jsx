import React from 'react'

export default function Inputs({type,value,onChange,placeholder,className="",}) {
  return (
  <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={`  bg-[#F3F3F5;]border px-3 py-2 rounded-[10px] w-[400px] h-[40px] ${className}`}/>
  )
}
