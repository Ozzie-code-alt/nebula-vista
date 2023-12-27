
import React from 'react'
import dynamic from 'next/dynamic'
import Index from '../sub/Cube'

const MainSection2 = () => {

  return (
    <div className='w-screen h-screen mt-80 shadow-lg shadow-[#ffffff]/50 bg-black backdrop-blur-md flex flex-row justify-center items-center text-white '>
        <div className='lg:w-6/12 h-auto sm:w-full'>
          <div className='flex justify-center text-7xl'>
            <h1>Tech Stacks</h1>
          </div>

          {/*Put tech stacks here */}
        <Index/>
        </div>


    </div>
  )
}

export default MainSection2