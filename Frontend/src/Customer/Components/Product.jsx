import React from 'react';
import { CiHeart } from "react-icons/ci";
import { Rating } from './rating';

export const Product = ({ product, onClick }) => {
  return (
    <div className='space-y-1'>
      <div className='py-[2.5vh] px-[1vw]  cursor-pointer items-center border  rounded-md shadow-md bg-[#f5f5f5] '
       onClick={onClick}
      >
        <div className='flex justify-between '>
          <p className='bg-red-500 text-white px-3 py-0.5 rounded text-sm font-semibold'>{product.discount}%</p>
          {/* <CiHeart className='size-5' /> */}

        </div>
        <div className='flex justify-center items-center'>
        <img src={product.image} alt={product.name} className='w-32 h-32 object-cover' />
        </div>
      </div>
      
      <p >{product.name}</p>
      <div className='flex gap-3'>
        <p className='text-red-500 font-semibold'>${product.price - (product.price / 100 * product.discount)}</p>
        <p className="line-through text-gray-500 text-base">${product.price}</p>
      </div>
      <Rating rating={4} />
    </div>
  );
};