"use client"
import React from 'react'
import Container from "./Container"
import Logo from './Logo'
import SearchInput from './Search'
import { NavBarList } from './Constant'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'


const Header = () => {
  return (
  <header className='w-full bg-accentWhite h-20 border-b-[1px] border-b-lightText/50 sticky z-50 top-0 left-0'>
    <Container className ="h-full flex items-center justify-between gap-5 lg:gap-10">
        <Logo/>
        <SearchInput/>
        <div
        className='hidden md:inline-flex items-center gap-7'>{
         NavBarList?.map((item)=>(
            <Link key={item?.title} href={item?.link} className='navbarItem'>
            {item?.title}
            </Link>
          
        ))}
          <Link href={"/signin"} className='navBarItems'>Sign In
          </Link>
          <Link href={"/studio"} className='navBarItems'>Studio
          </Link>
          </div>
            <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer text-2xl hoverEffect hover:text-darkOrange"/>
        </Container>
  </header>
  )
}

export default Header
