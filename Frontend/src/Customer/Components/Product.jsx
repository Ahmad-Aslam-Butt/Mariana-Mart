import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Product = ({ name, discount, image, rating, price, disprice }) => {
  return (
    <div className='space-y-1'>
      <div className='py-[5vh] px-[1.5vw]  cursor-pointer items-center border  rounded-md shadow-md bg-[#f5f5f5] '>
        <div className='flex justify-between '>
          <p className='text-red-500 font-semibold'>{discount}</p>
          <CiHeart className='size-5' />

        </div>
        <div className='flex justify-between'>
        <img src={image} alt={name} className='w-32 h-32 object-cover' />
      <MdOutlineRemoveRedEye className='size-5' />
        </div>
      </div>
      
      <p >{name}</p>
      <div className='flex gap-3'>
        <p>{disprice}</p>
        <p>{price}</p>
      </div>
      <p>{rating}</p>
    </div>
  );
};