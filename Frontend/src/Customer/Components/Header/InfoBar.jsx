import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

export const InfoBar = () => {
    return (
        <div>
            <div className='flex justify-around text-white bg-black text- py-2'>
                <p className='text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className='cursor-pointer px-2 hover:border border-b-[.1px]' href="#">ShopNow</a> </p>
                <p className='text-sm flex'>English<RiArrowDropDownLine className='size-5' /></p>
            </div>

        </div>
    )
}
