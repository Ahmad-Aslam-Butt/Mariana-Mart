import React from 'react'
import { CiLocationOn } from "react-icons/ci";

export const OrderSummary = () => {

    return (
        <div>
            {/* location */}
            <h2 className=' font-extralight mb-3'>
                Location
            </h2>
            <div className='flex gap-2 cursor-pointer mb-3'>
                <CiLocationOn className=' size-5  ' />
                <p className='text-sm'>Add Shipping Address</p>
            </div>

            {/* Subtotal */}
            <h1 className='text-xl font-semibold mb-3'>Order Summary</h1>
            <div className='flex justify-between  mb-1 font-light '>
                <h3>Subtotal (0 items)</h3>
                <p> $ 0</p>
            </div>
            <div className='flex justify-between mb-8 font-light'>
                <h3>Shipping Fee</h3>
                <p> $ 0</p>
            </div>

            {/* cupon */}
            <div className='mb-6 '>
                <input className='border rounded px-8 py-1' type="text" placeholder='Enter Cupon Code' />
                <button className='border rounded px-10 py-1 ml-2.5 bg-gray-800 hover:bg-black text-white '>Apply</button>
            </div>

            {/* total */}
            <div className='flex justify-between mb-3' >
                <p>Total</p>
                <p className='text-lg text-red-600'>$0</p>
            </div>
          
        </div>
    )
}
