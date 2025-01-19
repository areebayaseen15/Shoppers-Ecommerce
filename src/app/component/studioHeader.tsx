"use client"


import Link from 'next/link';
import { IoReturnDownBack } from 'react-icons/io5';
import Logo from './Logo';

// interface StudioHeaderProps {
//     rendorDefault(): import("react").ReactNode | Iterable<import("react").ReactNode>;
//   // define your props here
// }

const StudioHeader = () => {
  return (
    <div>
    <div className='p-5 bg-accent text-gray-100 flex-center justify-between'>
        <Link href={"/"} className='flex item-center gap-3 font-semibold hover:text-darkOrange hoverEffect'>
        <IoReturnDownBack className='text-2xl text-white'/>Go to Website</Link>
        <Logo className="text-white"/>
        <p className='hidden  md-inline-flex text-sm'>Admin Studio For Shoppers Online Shopping</p>
    </div>
    {/* {props.rendorDefault(props)} */}
    </div>
  )
}

export default StudioHeader
