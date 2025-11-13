import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Outlet/>
    </div>
  )
}

export default Layout