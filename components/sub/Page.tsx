import React from 'react'
import Header from './Header'
const Page = ({children}:any) => {
  return (
    <>

    <Header/>
    <main>{children}</main>    
    </>
  )
}

export default Page