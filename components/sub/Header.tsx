import React from 'react'
import Link from 'next/link'
import "../../app/globals.css"
const Header = () => {
  return (
  <header className='bg-slate-600'>
    <div className='w-full flex flex-rows gap-7 justify-center'>
        <div className="header-item ">
            <Link href={"/MainPage"}>
                Home
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/About"}>
                About
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/Contact"}>
               Contact
            </Link>
        </div>
    </div>
  </header>
  )
}

export default Header