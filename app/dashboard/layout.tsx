import React from 'react'
import SideBar from '../ui/dashboard/SideBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen flex'>
        <div className='w-1/4 p-3'>
         <SideBar />
        </div>
        <div className='w-3/4 p-3'>
            {children}
        </div>
    </div>
  )
}
