import React from 'react'
import { Outlet } from 'react-router-dom'
import { LeftMenu } from '../Components/LeftMenu'

export const Admin_Home = () => {
  return (
    <div className='md:grid md:grid-cols-7 md:gap-1 relative z-0'>
      <div className='md:col-span-1 md:h-screen'>
        {/* Left menu */}
        <LeftMenu />
      </div>

      <div className='md:col-span-6 md:overflow-auto md:h-screen bg-slate-50'>
        <Outlet />
      </div>
    </div>
  )
}
