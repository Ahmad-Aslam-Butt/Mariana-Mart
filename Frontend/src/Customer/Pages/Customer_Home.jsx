import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Navbar } from '../Components/Header/Navbar'
import { CustomerHeader } from '../Components/Header/CustomerHeader'
import { Footer } from './Footer'
export const Customer_Home = () => {
  return (
    <>
      {/* <Header/> */}
      <CustomerHeader />

      <Outlet />

      {/* Footer */}
      <Footer/>

    </>
  )
}
