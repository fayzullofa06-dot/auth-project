
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[minmax(240px,280px)_1fr] '>
      <aside className='bg-[#FFFFFF] min-h-screen shadow-lg'>
  <Sidebar/>
      </aside>
    
    <main className='flex justify-center min-w-0 ' >
      <div className='w-full max-w-[1200px] px-4 py-[60px]'>
    <Outlet/>
      </div>
  
    </main>
    </div>
  )
}
