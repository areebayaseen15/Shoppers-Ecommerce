

import Link from 'next/link'
import React from 'react'
import { MdSwitchAccount } from 'react-icons/md'
import SidebarCart from './sidebarCart'

const SideBar = () => {
  return (
    <div className='fixed top-60 right-2 z-20 flex flex-col gap-2 '>
        {/* user Account */}
        <Link href ={"/signin"} className="bg-accentWhite w-16 h-[70px] rounded-md flex  my-2 
        flex-col gap-1 text-ccent justify-center items-center shadow-sm shadow-lightGreen group overflow-hidden relative">
            <div className='flex item-center justify-center'>
            <MdSwitchAccount className='2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200'/>
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"/>
            </div>
       <p className="text-xs font-semibold">Profile</p>
        </Link>
      
       {/* Cart */}
       <SidebarCart/>
    </div>
  )
}

export default SideBar
