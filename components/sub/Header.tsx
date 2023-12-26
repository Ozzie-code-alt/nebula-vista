import React from 'react'
import Link from 'next/link'
import "../../app/globals.css"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button"

const Header = () => {
  return (
  <header className='shadow-lg shadow-[#2A0E61]/50 bg-indigo-300 backdrop-blur-md w-full h-14 flex flex-row justify-center items-center  text-white'>
    <div className='w-4/12 flex-grow px-10'>
            <h1 className='font-bold'>Justin Santos</h1>
    </div>
    <div className='hidden w-4/12 flex-rows gap-20 justify-center items-center pr-40 sm:flex md:pr-40'>

        <div className="header-item ">
            <Link href={"/main"} className='text-2xl font-semibold'>
                Home
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/about"} className='text-2xl font-bold'>
                About
            </Link>
        </div>
        <div className="header-item">
            <Link href={"/contacts"} className='text-2xl font-bold'>
               Contact
            </Link>
        </div>
    </div>

    <div className='flex sm:hidden mr-10'>
    <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </div>
  </header>
  )
}

export default Header