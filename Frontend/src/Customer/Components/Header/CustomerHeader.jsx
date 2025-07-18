import React from 'react'
import { InfoBar } from './InfoBar'
import { Navbar } from './Navbar'

export const CustomerHeader = () => {
  return (
    <div>
        {/* Discount / Offer Products */}
        <InfoBar/>
        
        {/* Navbar */}
        <Navbar/>
    </div>
  )
}
