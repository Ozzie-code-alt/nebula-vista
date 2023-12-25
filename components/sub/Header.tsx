import React from 'react'
import Link from 'next/link'
import "../../app/globals.css"
const Header = () => {
  return (
  <header className='shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md w-full h-14 flex flex-row justify-center items-center  text-white'>
    <div className='w-4/12 flex-grow px-10'>
            <h1 className='font-bold'>Justin Santos</h1>
    </div>
    <div className='flex w-4/12 flex-rows gap-20 justify-center items-center pr-40 md:pr-40'>

        <div className="header-item ">
            <Link href={"/MainPage"} className='text-2xl font-semibold'>
                Home
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/About"} className='text-2xl font-bold'>
                About
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/Contact"} className='text-2xl font-bold'>
               Contact
            </Link>
        </div>
    </div>
  </header>
  )
}

export default Header