import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Product = ({ product }) => {
  return (
    <div className='space-y-1'>
      <div className='py-[5vh] px-[1.5vw]  cursor-pointer items-center border  rounded-md shadow-md bg-[#f5f5f5] '>
        <div className='flex justify-between '>
          <p className='text-red-500 font-semibold'>{product.discount}</p>
          <CiHeart className='size-5' />

        </div>
        <div className='flex justify-between'>
        <img src={product.image} alt={product.name} className='w-32 h-32 object-cover' />
      <MdOutlineRemoveRedEye className='size-5' />
        </div>
      </div>
      
      <p >{product.name}</p>
      <div className='flex gap-3'>
        <p>{product.disprice}</p>
        <p>{product.price}</p>
      </div>
      <p>{product.rating}</p>
    </div>
  );
};