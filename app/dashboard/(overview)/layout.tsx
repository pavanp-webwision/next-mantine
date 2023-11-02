import React from 'react'
import Header from '@/app/ui/dashboard/(main-view)/Header'
import { Footer } from '@/app/ui/dashboard/(main-view)/footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <div className=' h-full flex flex-col'>
            <Header />
            <div className='flex-1'>
                {children}
            </div>
            <Footer />
        </div>
  )
}
